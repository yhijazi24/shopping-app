import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import './productslist.css'
import { useLocation } from 'react-router-dom'


const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("Newest");


  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <div className='Product-list-container'>
      <Navbar />
      <Announcements />
      <h1 className='product-list-title'>Dresses</h1>
      <div className='filter-container'>
        <div className='product-list-filter'>
          <span className='filter-span'>Filter Products:</span>
          <select className='filter-select' name='color' onChange={handleFilters}>
            <option className='filter-option' disabled >Color</option>
            <option className='filter-option'>White</option>
            <option className='filter-option'>Black</option>
            <option className='filter-option'>Red</option>
            <option className='filter-option'>Blue</option>
            <option className='filter-option'>Yellow</option>
            <option className='filter-option'>Green</option>
          </select>
          <select className='filter-select' name='size' onChange={handleFilters}>
            <option className='filter-option' disabled >Size</option>
            <option className='filter-option'>XS</option>
            <option className='filter-option'>S</option>
            <option className='filter-option'>M</option>
            <option className='filter-option'>L</option>
            <option className='filter-option'>XL</option>
          </select>
        </div>
        <div className='product-list-filter'>
          <span className='filter-span'>Sort Products:</span>
          <select className='filter-select' onChange={(e) => setSort(e.target.value)}>
            <option value="newest" className='filter-option'>Newest</option>
            <option value="asc" className='filter-option'>Price (asc)</option>
            <option value="desc" className='filter-option'>Price (desc)</option>
          </select>
        </div>
      </div>
      <Products cat={cat} filters={filters} sort={sort}/>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default ProductList
