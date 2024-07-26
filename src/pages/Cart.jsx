import React from 'react'
import './cart.css'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
const Cart = () => {
  return (
    <div className='cart-container'>
      <Navbar />
      <Announcements />
      Cart
      <Footer />
    </div>
  )
}

export default Cart
