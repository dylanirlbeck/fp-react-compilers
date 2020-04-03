import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { Container, Row } from "../../components/ui/Common";
import JSONViewer from "../../components/ui/JSONViewer";
import withGraphQL from "../../components/hocs/withGraphQL";

const updateMeMutationTemplate = gql`
  mutation UpdateMe($input: UpdateMeInput!) {
    updateMe(input: $input) {
      firstName
    }
  }
`;

const MutationExample = () => {
  const [queryEvents, setQueryEvents] = useState([]);
  const [updateMe] = useMutation(updateMeMutationTemplate);

  const onClick = async () => {
    try {
      const result = await updateMe({
        variables: { input: { firstName: "Mitchell" } },
      });
      setQueryEvents(events => events.concat(result));
    } catch (error) {
      alert("Whoops! Something went wrong.");
    }
  };

  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>
        Mutation on Demand
      </h1>
      <Row align="center" justify="between">
        <button onClick={onClick}>Click Me!</button>
        <JSONViewer data={queryEvents} />
      </Row>
    </Container>
  );
};

export default withGraphQL(MutationExample);
