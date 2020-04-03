/**
 * This is how you could configure a more complicated Apollo Client
 * with support for WebSockets, centralized error handling, and authentication
 */

import fetch from "isomorphic-fetch";
import { from, split } from "apollo-link";
import { onError } from "apollo-link-error";
import { createHttpLink } from "apollo-link-http";
import { ApolloClient } from "apollo-client";
// import { WebSocketLink } from "apollo-link-ws";
import { setContext } from "apollo-link-context";
import { getMainDefinition } from "apollo-utilities";
import { InMemoryCache } from "apollo-cache-inmemory";

/**
 * Apollo cache instance
 */
const cache = new InMemoryCache();

/**
 * HTTP Link
 */
const httpLink = createHttpLink({
  uri: `https://luij2.sse.codesandbox.io`,
  fetch,
});

/**
 * WebSocket link for subscriptions
 */
// const wsLink = new WebSocketLink({
//   uri: `ws://luij2.sse.codesandbox.io`,
//   options: {
//     reconnect: true,
//   },
// });

/**
 * Sets auth token on an individual request
 */
const authorizationLink = setContext(
  async (request, previousContext) => {
    const headers = {
      authorization: `Bearer this_is_some_jwt_or_whatever`,
    };

    return { headers };
  }
);

/**
 * Single place to handle errors
 */
const handleErrorLink = onError(
  ({ forward, graphQLErrors, operation, response }) => {
    /**
     * Do error handling here
     * Send to error handling service, trigger alert, etc.
     */
    return forward(operation);
  }
);

const remoteDataLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  // wsLink,
  httpLink
);

/**
 * Apollo Client instance
 */
export const client = new ApolloClient({
  cache,
  link: from([
    authorizationLink,
    handleErrorLink,
    remoteDataLink,
  ]),
});
