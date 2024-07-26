import React from 'react'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import './productpage.css'
import { Add, Remove } from '@mui/icons-material'
const Product = () => {
    return (
        <div className='page-container'>
            <Navbar />
            <Announcements />
            <div className='page-wrapper'>
                <div className='page-img-container'>
                    <img className='page-img' src='https://i.ibb.co/S6qMxwr/jean.jpg' />
                </div>

                <div className='page-info'>
                    <h1 className='page-title'>Denim Jumpsuit</h1>
                    <p className='page-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                        iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                        tristique tortor pretium ut. Curabitur elit justo, consequat id
                        condimentum ac, volutpat ornare.</p>
                    <span className='page-price'>$9.99</span>
                    <div className='page-filter'>
                        <div className='page-filter-container'>
                            <span className='page-filter-title'>Color</span>
                            <div className='page-filter-color' style={{ backgroundColor: 'black' }}></div>
                            <div className='page-filter-color' style={{ backgroundColor: 'darkblue' }}></div>
                            <div className='page-filter-color' style={{ backgroundColor: 'gray' }}></div>
                        </div>
                        <div className='page-filter-container'>
                            <span className='page-filter-title'>Size</span>
                            <select className='page-filter-size' >
                                <option className='page-filter-size-option'>XS</option>
                                <option className='page-filter-size-option'>S</option>
                                <option className='page-filter-size-option'>M</option>
                                <option className='page-filter-size-option'>L</option>
                                <option className='page-filter-size-option'>XL</option>
                            </select>
                        </div>
                    </div>
                    <div className='add-container'>
                        <div className='product-amount'>
                            <Remove />
                            <span className='amount-page'>1</span>
                            <Add />
                        </div>
                        <button className='add-button'>ADD TO CART</button>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Product
