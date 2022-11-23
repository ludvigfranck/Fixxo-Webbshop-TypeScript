import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import FlashsaleImage from '../assets/images/8.png'
import ProductCard from '../components/ProductCard'
import { ProductContextData, Product } from '../models/productModel'
import { ProductContext } from '../contexts/ProductContext'

const SecFlashSaleSection: React.FC = () => {
    const { secFlashsaleProducts, getSecFlashsaleProducts } = React.useContext(ProductContext) as ProductContextData
  
    useEffect(() => {
        getSecFlashsaleProducts(4)
      }, [])

    return (
    <section className="sec-flashsale">
        <div className="container">
            <div className="sec-flashsale-content">
                <div className="sec-flashsale-cards">
                    {
                        secFlashsaleProducts.map((product: Product) => (<ProductCard key={product.articleNumber} product={product} />))
                    }
                </div>
            </div>
            <div className="sec-flashsale-box">
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
        </div>
    </section>
  )
}

export default SecFlashSaleSection