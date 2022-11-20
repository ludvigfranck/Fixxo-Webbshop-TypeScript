import React from 'react'
import { NavLink } from 'react-router-dom'

const SpecialitySection: React.FC = () => {
  return (
    <section className="speciality">
        <div className="container">
            <h1>Our Speciality</h1>
            <div className="content-container">
                <div className="speciality-box">
                    <div className="box-content">
                        <h2>Track Your Order</h2>
                        <NavLink to="/">Get started</NavLink>
                    </div>
                    <div className="gray-box"></div>
                </div>
                <div className="speciality-box">
                    <div className="box-content">
                        <h2>Make a Return</h2>
                        <NavLink to="/">Get started</NavLink>
                    </div>
                    <div className="gray-box"></div>
                </div>
                <div className="speciality-box">
                    <div className="box-content">
                        <h2>Request a Price <br /> Adjustment</h2>
                        <NavLink to="/">Get started</NavLink>
                    </div>
                    <div className="gray-box"></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SpecialitySection