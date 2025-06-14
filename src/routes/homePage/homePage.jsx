import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./homePage.scss"
import SearchBar from '../../components/navbar/searchBar/SearchBar'

const homePage = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    // Navigate to list page when bg.png is clicked
    navigate('/list');
  };

  return (
    <div className="homePage">
        <div className="textContainer">
            <div className="wrapper">
            <h1 className='title'>FIND YOUR HOUSE HERE & GET YOUR DREAM PLACE</h1>
            <p>Find your dream place to the vacation u want to travel to with the help of me :3 </p>
            <SearchBar/>
            <div className="boxes">
              <div className="box">
                <h1>16+</h1>
                <h2>Years of experience</h2>
              </div>
              <div className="box">
                <h1>200</h1>
                <h2>Awards</h2>
              </div>
              <div className="box">
                <h1>1200+</h1>
                <h2>Property ready</h2>
              </div>
            </div>
            </div>
        </div>
        
        <div className="imgContainer">
            <img 
              src="/bg.png" 
              alt="" 
              onClick={handleImageClick}
              style={{ cursor: 'pointer' }}
            />
        </div>
    </div>
  )
}

export default homePage