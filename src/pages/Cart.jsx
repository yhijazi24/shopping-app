import React from 'react'
import './cart.css'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'
const Cart = () => {
  return (
    <div className='cart-container'>
      <Navbar />
      <Announcements />
      <div className='cart-wrapper'>
        <h1 className='cart-title'>YOUR BAG</h1>
        <div className='cart-top'>
          <button className='cart-top-button'>CONTINUE SHOPPING</button>
          <span className='cart-top-text'>Shopping Bag(2)</span>
          <span className='cart-top-text'>Your Wishlist (0)</span>
          <button className='cart-top-button top-button-2'>CHECK OUT NOW</button>
        </div>
        <div className='cart-bottom'>
          <div className='cart-info'>
            <div className='cart-product'>
                <div className='cart-product-detail'>
                  <img className='cart-product-img' src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A'/>
                  <div className='product-detail'>
                    <span className='cart-product-name'><b>PRODUCT:</b>JESSIE THUNDER SHOES</span>
                    <span className='cart-product-id'><b>ID:</b>9385669710</span>
                    <div className='cart-product-color' style={{backgroundColor: "black"}}></div>
                    <span className='cart-product-size'><b>SIZE:</b>37.5</span>
                  </div>
                </div>
                <div className='cart-product-price'>
                  <div className='cart-price-container'>
                    <Add />
                    <div className='cart-product-amount'>2</div>
                    <Remove />
                  </div>
                  <div className='cart-product-total'>$30</div>
                </div>
            </div>
            <hr className='hr'></hr>
            <div className='cart-product'>
                <div className='cart-product-detail'>
                  <img className='cart-product-img' src='https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png'/>
                  <div className='product-detail'>
                    <span className='cart-product-name'><b>PRODUCT:</b>HAKURA T-SHIRT</span>
                    <span className='cart-product-id'><b>ID:</b>938522665</span>
                    <div className='cart-product-color' style={{backgroundColor: "gray"}}></div>
                    <span className='cart-product-size'><b>SIZE:</b>M</span>
                  </div>
                </div>
                <div className='cart-product-price'>
                  <div className='cart-price-container'>
                    <Add />
                    <div className='cart-product-amount'>1</div>
                    <Remove />
                  </div>
                  <div className='cart-product-total'>$20</div>
                </div>
            </div>
          </div>
          <div className='cart-summary'>
            <h1 className='summary-title'>ORDER SUMMARY</h1>
            <div className='summary-item'>
              <span className='summary-text'>Subtotal</span>
              <span className='summary-text'>$50</span>
            </div>
            <div className='summary-item'>
              <span className='summary-text'>Estimated Shipping</span>
              <span className='summary-text'>$5.90</span>

            </div>
            <div className='summary-item'>
              <span className='summary-text'>Shipping Discount</span>
              <span className='summary-text'>$-5.90</span>

            </div>
            <div className='summary-item total'>
              <span className='summary-text '>Total</span>
              <span className='summary-text'>$50</span>

            </div>
            <button className='summary-button'>CHECK OUT NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart
