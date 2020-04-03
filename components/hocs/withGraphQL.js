import React from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloProviderHooks } from "@apollo/react-hooks";
import apolloClient from "../../src/gatsby-theme-apollo/client";

const withGraphQL = BaseComponent => props => {
  return (
    <ApolloProvider client={apolloClient}>
      <ApolloProviderHooks client={apolloClient}>
        <BaseComponent {...props} />
      </ApolloProviderHooks>
    </ApolloProvider>
  );
};

export default withGraphQL;
