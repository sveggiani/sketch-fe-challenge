import { createApolloFetch } from 'apollo-fetch';

export const fetchData = createApolloFetch({
  uri: 'https://graphql.sketch.cloud/api',
});
