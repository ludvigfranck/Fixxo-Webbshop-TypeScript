import React from 'react'
import { NavLink } from 'react-router-dom'
import ShowcaseImgLeft from '../assets/images/1.png'
import ShowCaseImgRight from '../assets/images/2.png'


const ShowcaseSection: React.FC = () => {
  return (
    <section className="showcase">
        <div className="container">
            <img className="showcase-img-left" src={ShowcaseImgLeft}  alt="placeholder left" />
            <div className="showcase-body">
                <h1>SALE UP</h1>
                <h1>To 50% Off</h1>
                <p>Online shopping free home delivery over $100</p>
                <NavLink className="btn-theme" to="/">
                    <span className="corner-left"></span>
                    <span className="btn-text">SHOP NOW</span>
                    <span className="corner-right"></span>
                </NavLink>
            </div>
            <img className="showcase-img-right" src={ShowCaseImgRight} alt="placeholder right" />
        </div>
    </section>
  )
}

export default ShowcaseSection