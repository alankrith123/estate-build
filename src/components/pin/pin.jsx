import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import "./pin.scss"

const pin = ({item}) => {
  return (
    <div className="pin">
        <Marker position={[item.latitude, item.longitude]}>
                <Popup>
                    <div className="popupContainer">
                        <img src={item.images} alt="" />
                        <div className="textContainer">
                            <Link to={`/${item.id}`}>{item.title}</Link><br />
                            <span> {item.bedrooms} Bedrooms</span>
                            <b style={{color: "green", paddingLeft: "10px"}}>${item.price}</b>
                        </div>
                    </div>
                </Popup>
              </Marker>
    </div>
  )
}

export default pin