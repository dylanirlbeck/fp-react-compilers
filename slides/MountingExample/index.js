import React, { useEffect, useState } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Container } from "../../components/ui/Common";
import JSONViewer from "../../components/ui/JSONViewer";
import withGraphQL from "../../components/hocs/withGraphQL";

const meQueryTemplate = gql`
  query {
    me {
      firstName
    }
  }
`;

const MountingExample = () => {
  const [queryEvents, setQueryEvents] = useState([]);
  const queryState = useQuery(meQueryTemplate);

  useEffect(() => {
    setQueryEvents(events => events.concat(queryState));
  }, [queryState]);

  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>
        Query on Mount
      </h1>
      <JSONViewer data={queryEvents} />
    </Container>
  );
};

export default withGraphQL(MountingExample);
