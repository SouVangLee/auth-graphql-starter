import React from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';


import UserForm from './UserForm';
import LOGIN from '../mutations/login';
import CURRENT_USER from '../queries/currentUser';

const Login = () => {
  const [login, {data, error}] = useMutation(LOGIN);
  const navigate = useNavigate();

  const handleSubmit = (email, password) => {
    login({ 
      variables: {
        email,
        password,
      },
      refetchQueries: [{ query: CURRENT_USER }]
    }).then(() => navigate('/'));
  }

  return (
    <UserForm btnLabel={'Login'} handleSubmit={handleSubmit}/>
  )
};

export default Login;
