import React, { useState } from 'react';

const UserForm = ({ btnLabel, handleSubmit, errors}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    handleSubmit(email, password);
    setEmail('');
    setPassword('');
  }

  const renderErrors = (
    errors.map(error => {
      return (
        <div key={error}>
          {error}
        </div>
      );
    })
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Email:</label>
        <input 
          autoFocus
          type="text" 
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Password:</label>
        <input
          // type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <div className='error-list'>{renderErrors}</div>
        <button>{btnLabel}</button>
      </form>
    </div>
  );
};

export default UserForm;