import React, { useState } from 'react'
import { useSignup } from '../../hooks/useSignup';

import './Signup.css'
export default function Signup() {

    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  

    const { signup, error, isPending } = useSignup();

    function handleSubmit(e){
      e.preventDefault();
      signup(email, password, displayName);
    }

  return (
    <form className='signup-form' onSubmit={handleSubmit}>
      <label>
        <span>Enter Username:</span>
        <input 
          type='text'
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
          placeholder='Enter your username'
        />
      </label>
      
      <label>
        <span>Enter Email:</span>
        <input 
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder='Enter your email'
        />
      </label>
      
      <label>
        <span>Enter Password:</span>
        <input 
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder='Enter your password'
        />
      </label>
      {!isPending && <button className='btn'>Sign Up</button>}
      {isPending && <button className='btn' disabled>Loading...</button>}
      {error && <div className='error'>{error}</div>}
    </form>
  )
}
