import React, { useState, useEffect } from "react";
import _ from "lodash";
import gql from "graphql-tag";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Container, Row } from "../../components/ui/Common";
import JSONViewer from "../../components/ui/JSONViewer";
import withGraphQL from "../../components/hocs/withGraphQL";

const meQueryTemplate = gql`
  query {
    me {
      fullName
      id
    }
  }
`;

const updateMeMutationTemplate = gql`
  mutation UpdateMe($input: UpdateMeInput!) {
    updateMe(input: $input) {
      fullName
      id
    }
  }
`;

const QueryAndMutationExample = () => {
  const [queryEvents, setQueryEvents] = useState([]);
  const queryState = useQuery(meQueryTemplate);

  const [mutationEvents, setMutationEvents] = useState([]);
  const [updateMe, mutationState] = useMutation(
    updateMeMutationTemplate
  );

  useEffect(() => {
    setQueryEvents(events => events.concat(queryState));
  }, [queryState]);

  useEffect(() => {
    setMutationEvents(events =>
      events.concat(mutationState)
    );
  }, [mutationState]);

  const onClick = async () => {
    try {
      const result = await updateMe({
        variables: { input: { firstName: "Testing123" } },
      });
      setQueryEvents(events => events.concat(result));
    } catch (error) {
      alert("Whoops! Something went wrong.");
    }
  };

  const fullName = _.get(
    queryState,
    ["data", "me", "fullName"],
    "..."
  );

  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>
        Bringing it all together
      </h1>
      <Row justify="between">
        <Container style={{ alignSelf: "center" }}>
          <button onClick={onClick}>Click Me!</button>
        </Container>
        <Container style={{ margin: "0 64px 0 128px" }}>
          <p>Query Events</p>
          <JSONViewer data={queryEvents} />
        </Container>
        <Container style={{ margin: "0 128px 0 64px" }}>
          <p>Mutation Events</p>
          <JSONViewer data={mutationEvents} />
        </Container>
        <Container>
          <p>And the full name is:</p>
          <h3>{fullName}</h3>
          {/* DO THE BLOG POSTS w/ Created At! */}
        </Container>
      </Row>
    </Container>
  );
};

export default withGraphQL(QueryAndMutationExample);
