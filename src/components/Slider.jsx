import React, { useState } from 'react';
import './slider.css'
import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import { sliderItems } from '../data'



const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => { 
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    };
 
    return (
        <div className='slider-container'>
            <div className='arrow left' onClick={() => handleClick("left")}>
                <ArrowBackIosNewOutlined/>
            </div>
            <div className='slider-wrapper' slideIndex={slideIndex}  style={{ transform: `translateX(${slideIndex * -100}vw)` }}>
                {sliderItems.map((item) => (
                    <div className='slide' style={{ backgroundColor: `#${item.bg}` }} key={item.id} >
                        <div className='img-container'>
                            <img src={item.img} className='slider-img' />
                        </div>
                        <div className='info-container'>
                            <h1 className='slider-title'>{item.title}</h1>
                            <p className='slider-p'>{item.desc}</p>
                            <button className='slider-button'>SHOP NOW</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='arrow right' onClick={() => handleClick("right")}>
                <ArrowForwardIosOutlined />
            </div>
        </div>
    )
}

export default Slider
