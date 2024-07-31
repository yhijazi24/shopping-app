import React from 'react';
import { Link } from 'react-router-dom';
import './category.css';

const CategoryItem = ({ item }) => {
  return (
    <div className='catitem-container'>
      <Link to={`/products/${item.cat}`} className='category_link'>
        <img src={item.img} alt={item.title} className='catitem-img' />
        <div className='catitem-info'>
          <h1 className='catitem-title'>{item.title}</h1>
          <button className='catitem-button'>SHOP NOW</button>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;

