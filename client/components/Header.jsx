import React from 'react';
import { useQuery } from '@apollo/client';
import CURRENT_USER from '../queries/currentUser';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { data, loading, error } = useQuery(CURRENT_USER);

  if (loading) return <div />;
  if (error) return <p>There was an error: {error}</p>;


  const signUp = () => <Link path="/signup" />
  const login = () => <Link path="/login" />
  const renderButtons = () => {
    if (data.currentUser) return <button>Logout</button>;

    return (
      <div>
        <button onClick={signUp}>Sign Up</button>
        <button onClick={login}>Login</button>
      </div>
    )
  }

  return (
    <div className='navbar'>
      <Link to="/" className='home-link'>Home</Link>
      <div className='nav-wrapper'>
        {renderButtons()}
      </div>
    </div>
  );
};

export default Header;