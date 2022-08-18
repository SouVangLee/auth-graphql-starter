import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Link , useNavigate} from 'react-router-dom';

import CURRENT_USER from '../queries/currentUser';
import LOGOUT from '../mutations/logOut';

const Header = (props) => {
  const { data, loading, error, client } = useQuery(CURRENT_USER);
  const [logoutUser] = useMutation(LOGOUT);
  const navigate = useNavigate();

  if (loading) return <div />;
  if (error) return <p>There was an error: {error}</p>;

  const logOut = () => {
    logoutUser()
      .then(res => {
        console.log('LOGOUT_USER_RESPONSE', res);
        client.resetStore();
      })
      .then(() => navigate('/'));
  }

  const renderButtons = () => {
    if (data.currentUser) {
      return (
      <button onClick={logOut}>Logout</button>
      );
    };

    return (
      <div>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
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