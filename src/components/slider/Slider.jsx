import { useState } from 'react'
import React from 'react'
import './slider.scss'


const Slider = ({images}) => {
    const[imageIndex, setImageIndex]=useState(null);
    const changeSlides = (direction) => {
        if(direction==="left"){
            setImageIndex(imageIndex===0?images.length-1:imageIndex-1);
        }else{
            setImageIndex(imageIndex===images.length-1?0:imageIndex+1);
        }
    }
  return (
    <div className="slider">
        {imageIndex!=null && (<div className="fullSlider">
            <div className="arrow" onClick={() => changeSlides("left")}>
                <img src="arrow.png" alt="" />
            </div>
            <div className="imgContainer">
                <img src={images[imageIndex]} alt="" />
            </div>
            <div className="arrow" onClick={() => changeSlides("right")}>
                <img src="arrow.png" className="right" alt="" />
            </div>
            <div className="close" onClick={() => setImageIndex(null)}>X</div>
        </div>)}
        <div className="bigImage">
            <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
        </div>
        <div className="smallImage">
            {images.slice(1).map((image, index) => (
                <img key={index} src={image} alt="" onClick={() => setImageIndex(index+1)}/>
            ))}
        </div>
    </div>
  )
}

export default Slider