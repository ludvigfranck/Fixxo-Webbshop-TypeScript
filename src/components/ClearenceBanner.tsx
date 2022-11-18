import React from 'react'
import { NavLink } from 'react-router-dom'
import BannerImg from '../assets/images/3.png'

const ClearenceBanner = () => {
  return (
    <>
        <div className="clearence-content">
            <h1>Winter Clearance <br /> Up to 70% Off!</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit 
            voluptatem accusantium doloremque laudantium, 
            totam rem apriam eaque ipsa quae ab illo inventore</p>
            <NavLink className="btn-theme" to="/">
                <span className="corner-left"></span>
                SHOP NOW
                <span className="corner-right"></span>
            </NavLink>
        </div>
        <div className="clearence-img">
            <img alt="New Arrivals img" src={BannerImg} />
        </div>
    </>

  )
}

export default ClearenceBanner