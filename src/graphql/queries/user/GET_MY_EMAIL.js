import gql from 'graphql-tag';

const GET_MY_EMAIL = gql`
  query GET_MY_EMAIL {
    me {
      user {
        email
      }
    }
  }
`;

export default GET_MY_EMAIL;
