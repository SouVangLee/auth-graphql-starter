import React, { useState } from 'react';

const UserForm = ({ btnLabel, handleSubmit}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    handleSubmit(email, password);
    setEmail('');
    setPassword('');
  }

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
        <button>{btnLabel}</button>
      </form>
    </div>
  );
};

export default UserForm;