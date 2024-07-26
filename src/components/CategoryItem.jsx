import React from 'react'
import './category.css'


const CategoryItem = ({item}) => {
  return (
    <div className='catitem-container'>
      <img src={item.img} className='catitem-img'/>
      <div className='catitem-info'>
        <h1 className='catitem-title'>{item.title}</h1>
        <button className='catitem-button'>SHOP NOW</button>
      </div>
    </div>
  )
}

export default CategoryItem
