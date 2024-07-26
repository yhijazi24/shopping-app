import React from 'react'
import './product.css'
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'


const Product = ({item}) => {
  return (
    <div className='product-container'>
      <div className='product-circle'></div>
      <img src={item.img} className='product-img'/>
      <div className='product-info'>
        <div className='product-icon'>
            <ShoppingCartOutlined/>
        </div>
        <div className='product-icon'>
            <SearchOutlined/>
        </div>
        <div className='product-icon'>
            <FavoriteBorderOutlined/>
        </div>
      </div>
    </div>
  )
}

export default Product
