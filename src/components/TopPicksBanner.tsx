import React from 'react'
import { NavLink } from 'react-router-dom'
import BannerImg from '../assets/images/5.png'

const TopPicksBanner: React.FC = () => {
  return (
    <div className="banner-left">
        <img className="banner-left-img" src={BannerImg} />
        <div className="banner-left-content">
            <h1>Pamela Reif's <br/> Top Picks</h1>
            <NavLink className="btn-theme" to="/">
                <span className="corner-left"></span>
                SHOP NOW
                <span className="corner-right"></span>
            </NavLink>
        </div>
    </div>
  )
}

export default TopPicksBanner