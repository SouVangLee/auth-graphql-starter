import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import UserForm from './UserForm';
import SIGN_UP from '../mutations/signup';
import CURRENT_USER from '../queries/currentUser';

const SignUp = () => {
  const [signup] = useMutation(SIGN_UP);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (email, password) => {
    signup({ 
      variables: {
        email,
        password,
      },
      refetchQueries: [{ query: CURRENT_USER }]
    }).then(
      () => navigate('/'), 
      res => {
        const getErrors = res.graphQLErrors.map(error => error.message);
        setErrors(getErrors);
      }
    )
  }

  return (
    <UserForm btnLabel={'Sign up'} handleSubmit={handleSubmit} errors={errors} />
  )
};

export default SignUp;
