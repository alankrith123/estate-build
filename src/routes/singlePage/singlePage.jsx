import React from 'react'
import Slider from '../../components/slider/Slider'
import { singlePostData, userData } from '../../lib/dummydata'
import Map from '../../components/map/Map'
import './singlePage.scss'

const SinglePage = () => {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
        <Slider images={singlePostData.images}/>
        <div className="info">
          <div className="top">
            <div className="post">
              <h1>{singlePostData.title}</h1>
              <div className="address">
                <img src="/pin.png" alt="" />
                <span>{singlePostData.address}</span>
              </div>
              <div className="price"> ${singlePostData.price}</div>
            
            </div>
            <div className="user">
              <img src={userData.img} alt="" />
              <span>{userData.name}</span>
            </div>
            
          </div>
          <div className="bottom"></div>
        </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
        <p><div className="title">General</div></p>
        <div className="listVertical">
          <div className="feature">
            <img src="/utility.png" alt="" />
            <div className="featureText">
              <span>Utility</span>
              <p>Renter is responsible</p>
            </div>
          </div>
          <div className="feature">
            <img src="/pet.png" alt="" />
            <div className="featureText">
              <span>Pet Policy</span>
              <p>Pets allowed</p>
            </div>
          </div>
          <div className="feature">
            <img src="/fee.png" alt="" />
            <div className="featureText">
              <span>Property Fees</span>
              <p>Must have 3x the total household income</p>
            </div>
          </div>

        </div>
        <p><div className="title">sizes</div></p>
        <div className="sizes">
          <div className="size">
            <img src="/size.png" alt="" />
            <span>80 sqft</span>
          </div>
          <div className="size">
            <img src="/bed.png" alt="" />
            <span>2 beds</span>
          </div>
          <div className="size">
            <img src="/bath.png" alt="" />
            <span>1 bathroom</span>
          </div>
        </div>
        <p><div className="title">nearby places</div></p>
        <div className="listHorizontal">
          <div className="place">
            <img src="/school.png" alt="" />
            <span>School</span>
          </div>
          <div className="place">
            <img src="/pet.png" alt="" />
            <span>Hospital</span>
          </div>
          <div className="place">
            <img src="/fee.png" alt="" />
            <span>Supermarket</span>
          </div>
        
        </div>

        <p><div className="title">location</div></p>
        <div className="mapContainer">
          <Map items={[singlePostData]}/>
        </div>
        <div className="buttons">
          <button>
            <img src="/chat.png" alt="" />
            Send a message
          </button>
          <button>
            <img src="/save.png" alt="" />
            Save
          </button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage