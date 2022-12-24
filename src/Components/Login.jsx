import React from 'react'
import { useState } from 'react';
import Button from './Button';

import "./login.css";

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.value);
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
    <form onSubmit={handleSubmit} action="" className='login'>
      <label htmlFor = "email">Username or email</label>
      <input value={email} placeholder = "username" type="email" id = "email" name='email' />
      <label htmlFor="password">Password</label>
      <input value={password} type="password" id='password' name='password' />
      <button className='loginBtn' type='submit'>LogIn</button>
    <br />
    <Button className = "sign">New User? SignUp here</Button>
    </form>
    
    </div>
  )
}

export default Login
