import ApolloClient from 'apollo-boost';
import authManager from 'utils/authManager';

const uri = process.env.REACT_APP_GRAPHQL_URL;
const token = authManager.getCookiesAuthData();

const client = new ApolloClient({
  uri,
  request: (operation) => {
    operation.setContext({
      headers: {
        authorization: token ? `JWT ${token}` : '',
      },
    });
  },
});

export default client;
