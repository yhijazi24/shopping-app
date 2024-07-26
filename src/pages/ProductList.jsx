import React from 'react'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import './productslist.css'


const ProductList = () => {
  return (
    <div className='Product-list-container'>
      <Navbar />
      <Announcements />
      <h1 className='product-list-title'>Dresses</h1>
      <div className='filter-container'>
        <div className='product-list-filter'>
          <span className='filter-span'>Filter Products:</span>
          <select className='filter-select'>
            <option className='filter-option' disabled selected>Color</option>
            <option className='filter-option'>White</option>
            <option className='filter-option'>Black</option>
            <option className='filter-option'>Red</option>
            <option className='filter-option'>Blue</option>
            <option className='filter-option'>Yellow</option>
            <option className='filter-option'>Green</option>
          </select>
          <select className='filter-select'>
            <option className='filter-option' disabled selected>Size</option>
            <option className='filter-option'>XS</option>
            <option className='filter-option'>S</option>
            <option className='filter-option'>M</option>
            <option className='filter-option'>L</option>
            <option className='filter-option'>XL</option>
          </select>
        </div>
        <div className='product-list-filter'>
          <span className='filter-span'>Sort Products:</span>
          <select className='filter-select'>
            <option className='filter-option' selected>Newest</option>
            <option className='filter-option'>Price (asc)</option>
            <option className='filter-option'>Price (desc)</option>
          </select>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default ProductList
