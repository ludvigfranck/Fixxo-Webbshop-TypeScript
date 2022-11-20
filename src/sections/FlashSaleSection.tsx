import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import FlashsaleImage from '../assets/images/7.png'
import ProductCard from '../components/ProductCard'
import { ProductContextData, Product } from '../models/productModel'
import { ProductContext } from '../contexts/ProductContext'

const FlashSaleSection: React.FC = () => {
  const { flashsaleProducts, getFlashsaleProducts } = React.useContext(ProductContext) as ProductContextData
  
  useEffect(() => {
    getFlashsaleProducts(4)
  }, [])

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
            {
              flashsaleProducts.map((product: Product) => (<ProductCard product={product} key={product.articleNumber} />))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default FlashSaleSection