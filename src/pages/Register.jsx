import React from 'react'
import './register.css'


const Register = () => {
  return (
    <div className='register-container'>
      <div className='register-wrapper'>
        <h1 className='register-title'>CREATE AN ACCOUNT</h1>
        <form className='register-form'>
            <input placeholder='First Name' className='register-input'/>
            <input placeholder='Last Name' className='register-input' />
            <input placeholder='Username' className='register-input' />
            <input placeholder='Email' className='register-input' />
            <input placeholder='Password' className='register-input' />
            <input placeholder='Confirm Password' className='register-input' />
            <span className='register-agree'>By creating an account, I consent to the processing of my personal data in accordance with <b>PRIVACY POLICY</b></span>
            <button className='register-button'>CREATE</button>
        </form>
      </div>
    </div>
  )
}

export default Register
