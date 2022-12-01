import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import FlashsaleImage from '../assets/images/7.png'

const FlashSaleSection: React.FC = () => {
  return (
    <section className="flashsale">
      <div className="container">
        <div className="flashsale-box">
          <img src={FlashsaleImage} alt="Flashsale Image" />
        </div>
        <div className="box-content">
            <h1>FLASHSALE</h1>
            <NavLink to="/" className="btn-theme">
              <span className="corner-left"></span>
                SHOP NOW
              <span className="corner-right"></span>
            </NavLink>
          </div>
        <div className="flashsale-content">
          <div className="flashsale-cards">

          </div>
        </div>
      </div>
    </section>
  )
}

export default FlashSaleSection