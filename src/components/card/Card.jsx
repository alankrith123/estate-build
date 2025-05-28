import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.scss";


const Card = ({ item }) => {
  return (
    <div className="card">
      <Link to={`/item/${item.id}`} className='imageContainer'>
        <img src={item.images} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/item/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedrooms} bedrooms</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>

            <div className="icons">
              <div className="icon">
                <img src="/save.png" alt="" />
              </div>
              <div className="icon">
                <img src="/chat.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card