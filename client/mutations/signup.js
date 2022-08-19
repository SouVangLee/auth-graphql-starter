import { gql } from '@apollo/client';

const SIGN_UP = gql`
  mutation signup($email: String, $password: String) {
    signup(email: $email, password: $password) {
      id
      email
    }
  }
`;

export default SIGN_UP;