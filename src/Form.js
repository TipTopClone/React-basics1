import { useState } from 'react';
import React from 'react';

export const Form = ({ addUser }) => {
  const [user, setUser] = useState('Sujan');

  // Controlled method
  const handleOnChange = (e) => {
    const { value } = e.target;
    setUser(value);
    // console.log(e.target);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addUser(user);
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit} action='' className='user-form'>
        <p>{user}</p>
        <input onChange={handleOnChange} type='text' />
        <button>Add User</button>
      </form>
    </div>
  );
};
