import React, { useState } from 'react'
import './Login.css'
import  {useLogin} from '../../hooks/useLogin'

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login, error, isPending} = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    login(email, password);
  }

  return (
    <form className='login-form' onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        <span>Email:</span>
        <input 
          type='email' 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder='Enter your email'
        />
      </label>

      <label>
        <span>Password:</span>
        <input 
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password} 
          placeholder='Enter your password'
        />
      </label>
      {!isPending && <button className='btn'>Sign In</button>}
      {isPending && <button className='btn' disabled>Loading...</button>}
      {error && <div className='error'>{error}</div>}
    </form>
  )
}
