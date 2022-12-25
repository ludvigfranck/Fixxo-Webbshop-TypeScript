import React from 'react'
import { NavLink } from 'react-router-dom'
import BannerImg from '../assets/images/4.png'

const NewArrivalsBanner: React.FC = () => {
  return (
    <>
        <div className="new-arrivals-content">
            <h1>New <br />Arrivals</h1>
            <NavLink className="btn-theme" to="/">
                <span className="corner-left"></span>
                SHOP NOW
                <span className="corner-right"></span>
            </NavLink>
        </div>
        <div className="new-arrivals-img">
            <img alt="New Arrivals img" src={BannerImg} />
        </div>
    </>
  )
}

export default NewArrivalsBanner