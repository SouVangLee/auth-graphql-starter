import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import CURRENT_USER from '../queries/currentUser';

const Dashboard = () => {
  const navigate = useNavigate();
  const { data, loading } = useQuery(CURRENT_USER);

  if (loading) return <div />;

  if (!loading && !data.currentUser) return navigate('/login');
  
  return (
    <div>
      <h1>Dashboard Page</h1>
      <h2>You should only see this if you are logged in</h2>
    </div>
  );
};

export default Dashboard;