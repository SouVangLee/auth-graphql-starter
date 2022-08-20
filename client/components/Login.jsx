import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';


import UserForm from './UserForm';
import LOGIN from '../mutations/login';
import CURRENT_USER from '../queries/currentUser';
import { usePageAttributes } from './ContextProvider';

const Login = () => {
  const [login] = useMutation(LOGIN);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  console.log('currentUser', currentUser);
  console.log('setCurrentUser', setCurrentUser);

  useEffect(() => {
    if (currentUser)
    navigate('/dashboard', { replace: true });
  }, [currentUser])

  const handleSubmit = (email, password) => {
    login({ 
      variables: {
        email,
        password,
      },
      refetchQueries: [{ query: CURRENT_USER }]
    }).then(
      (res) => setCurrentUser(res.data.login),
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
