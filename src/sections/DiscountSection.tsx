import React from 'react'
import { NavLink } from 'react-router-dom'
import DiscountImg from '../assets/images/9.png'

const DiscountSection: React.FC = () => {
  return (
    <section className="discount">
    <div className="container">
        <img src={DiscountImg} alt="Disocunt image" />
        <h1>Up to 70% off*</h1>
        <p>Women's, Men's & Kids' Winter Fashion</p>
        <NavLink className="btn-theme" to="/">
          <span className="corner-left"></span>
            SHOP NOW
          <span className="corner-right"></span>
        </NavLink>
    </div>
</section>
  )
}

export default DiscountSection