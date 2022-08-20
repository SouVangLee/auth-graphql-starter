import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import UserForm from './UserForm';
import LOGIN from '../mutations/login';
import CURRENT_USER from '../queries/currentUser';

const Login = () => {
  const [login] = useMutation(LOGIN);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (email, password) => {
    login({ 
      variables: {
        email,
        password,
      },
      refetchQueries: [{ query: CURRENT_USER }]
    }).then(
      () => navigate('/dashboard', { replace: true }),
      (res) => {
        const getErrors = res.graphQLErrors.map(error => error.message);
        setErrors(getErrors);
      }
    )
  }

  return (
    <UserForm btnLabel={'Login'} handleSubmit={handleSubmit} errors={errors}/>
  )
};

export default Login;
