import gql from 'graphql-tag';

const UPDATE_MY_EMAIL = gql`
  mutation UpdateMyEmail($input: String!) {
    updateUser(input: $input) {
      email
    }
  }
`;

export default UPDATE_MY_EMAIL;
