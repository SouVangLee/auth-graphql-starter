import React from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import UserForm from './UserForm';
import SIGN_UP from '../mutations/signup';
import CURRENT_USER from '../queries/currentUser';

const SignUp = () => {
  const [signup, {data, error}] = useMutation(SIGN_UP);
  const navigate = useNavigate();

  const handleSubmit = (email, password) => {
    signup({ 
      variables: {
        email,
        password,
      },
      refetchQueries: [{ query: CURRENT_USER }]
    }).then(() => navigate('/'));
  }

  return (
    <UserForm btnLabel={'Sign up'} handleSubmit={handleSubmit}/>
  )
};

export default SignUp;
