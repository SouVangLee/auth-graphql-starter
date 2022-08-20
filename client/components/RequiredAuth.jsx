import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import CURRENT_USER from '../queries/currentUser';


const RequiredAuth = ({ children }) => {
  const navigate = useNavigate();
  const { data, loading } = useQuery(CURRENT_USER);

  if (loading) return <div />
  useEffect(() => {
    if (!loading && !data.currentUser) return navigate('/login', { replace: true });
  }, [loading, data]);
  
  return children;
};

export default RequiredAuth;