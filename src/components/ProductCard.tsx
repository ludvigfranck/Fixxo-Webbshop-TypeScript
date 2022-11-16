import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductCard = () => {
  return (
    <div className="col">
        <div className="card">
            <div className="card-img">
                <img />
                <div className="card-menu d-xl-none">
                    <button className="menu-link"><i className="fa-regular fa-heart"></i></button>
                    <button className="menu-link"><i className="fa-regular fa-code-compare"></i></button>
                    <button className="menu-link"><i className="fa-regular fa-bag-shopping"></i></button>
                </div>
                <NavLink to="/" className="btn-theme btn-card-theme d-xl-none">
                    <span className="corner-left"></span>
                    <span className="corner-right"></span>
                    QUICK VIEW
                </NavLink>
            </div>
            <div className="card-body">
                <p className="card-category"></p>
                <h5 className="card-title"></h5>
                <p className="card-rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                </p>
                <p className="card-price"></p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard