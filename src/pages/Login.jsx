import React from 'react'
import './login.css'


const Login = () => {
  return (
    <div className='login-container'>
      <div className='register-wrapper'>
        <h1 className='register-title'>SIGN IN</h1>
        <form className='register-form'>
            <input placeholder='Username' className='register-input' />
            <input placeholder='Password' className='register-input' />
            <button className='register-button'>LOGIN</button>
            <a href='#' className='login-link'>FORGOT PASSWORD?</a>
            <a href='#' className='login-link'>CREATE A NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  )
}

export default Login
