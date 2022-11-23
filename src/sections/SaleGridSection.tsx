import React from 'react'
import SaleCards from '../components/SaleCards'

const SaleGridSection: React.FC = () => {
  return (
    <section className="sale-grid">
        <div className="container">
            <div className="sale-grid-products">
                <h1>Latest Products</h1>
                <div className="sale-grid-cards">
                    <SaleCards />
                </div>
                <button className="sale-grid-btn d-lg-none"></button>
            </div>

            <div className="sale-grid-products">
                <h1>Best Selling Product</h1>
                <div className="sale-grid-cards">
                    <SaleCards />
                </div>
                <button className="sale-grid-btn d-lg-none"></button>
            </div>

            <div className="sale-grid-products">
                <h1>Top Reacted Product</h1>
                <div className="sale-grid-cards">
                    <SaleCards />
                </div>
                <button className="sale-grid-btn d-lg-none"></button>
            </div>
        </div>
    </section>
  )
}

export default SaleGridSection