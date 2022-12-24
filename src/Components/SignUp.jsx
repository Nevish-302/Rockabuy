import React from 'react'
import { useState } from 'react';
import Button from './Button';

import './signup.css';

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.value);
}

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <div>
    <form onSubmit={handleSubmit} action="" className='signup'>
    <label htmlFor = "text">Full Name</label>
      <input value={name}  type="text" id = "name" name='name' />
      <label htmlFor = "email">Username or email</label>
      <input value={email} placeholder = "username" type="email" id = "email" name='email' />
      <label htmlFor="password">Password</label>
      <input value={password} type="password" id='password' name='password' />
      <button type='submit' className='sign'>Sign Up</button>
    <br />
    <Button className = "loginBtn">Already an User? Login here</Button>
    </form>
    
    </div>
  )
}

export default SignUp
