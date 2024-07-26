import React from 'react'
import "./newsletter.css"
import { Send } from '@mui/icons-material'
const Newsletter = () => {
  return (
    <div className='news-container'>
      <h1 className='news-title'>Newsletter</h1>
      <div className='news-description'>Get timely updates from your favorite products.</div>
      <div className='news-send'>
        <input placeholder="Your Email" className='news-input'/>
        <button className='news-button'>
            <Send/>
        </button>
      </div>
    </div>
  )
}

export default Newsletter
