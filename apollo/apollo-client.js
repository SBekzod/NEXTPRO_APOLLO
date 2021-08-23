import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "http://31.220.109.104:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
  // hard coding here to test
  let mb_id = "5f8d82bb3897c708d161151e";

  return {
    headers: {
      ...headers,
      ssid: mb_id,
      mbid: mb_id,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
