import React from 'react'
import { NavLink } from 'react-router-dom'
import BannerImg from '../assets/images/6.png'

const ConsciousBanner: React.FC = () => {
  return (
    <div className="banner-right">
        <div className="banner-right-content">
            <h1>Let's Be <br />Conscious</h1>
            <NavLink className="btn-theme" to="/">
                <span className="corner-left"></span>
                SHOP NOW
                <span className="corner-right"></span>
            </NavLink>
        </div>
        <img className="banner-right-img" src={BannerImg} />
    </div>
  )
}

export default ConsciousBanner