/**
 * Apollo configurations can get MUCH more sophisticated than this
 * This is the most minimal setup you can use with SSR support
 */

import fetch from "isomorphic-fetch";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  fetch,
  uri: "https://luij2.sse.codesandbox.io",
});

export default client;
