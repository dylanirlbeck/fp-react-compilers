import React, { useEffect, useState } from "react";
import gql from "graphql-tag";
import { useLazyQuery } from "@apollo/react-hooks";
import { Container, Row } from "../../components/ui/Common";
import JSONViewer from "../../components/ui/JSONViewer";
import withGraphQL from "../../components/hocs/withGraphQL";

const meQueryTemplate = gql`
  query {
    me {
      firstName
    }
  }
`;

const OnDemandExample = () => {
  const [queryEvents, setQueryEvents] = useState([]);
  const [loadProfileFn, queryState] = useLazyQuery(
    meQueryTemplate
  );

  useEffect(() => {
    setQueryEvents(events => events.concat(queryState));
  }, [queryState]);

  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>
        Query on Demand
      </h1>
      <Row align="center" justify="between">
        <button onClick={() => loadProfileFn()}>
          Click Me!
        </button>
        <JSONViewer data={queryEvents} />
      </Row>
    </Container>
  );
};

export default withGraphQL(OnDemandExample);
