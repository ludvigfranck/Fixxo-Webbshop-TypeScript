import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import FlashsaleImage from '../assets/images/8.png'
import ProductCard from '../components/ProductCard'
import { ProductContext } from '../contexts/ProductContext'
import { IProductContext, Product } from '../models/productModel'

const SecFlashSaleSection: React.FC = () => {
    const { flashsale, getFlashsale } = useContext(ProductContext) as IProductContext

    useEffect(() => {
        getFlashsale(4)
    }, [])
    
    return (
    <section className="sec-flashsale">
        <div className="container">
            <div className="sec-flashsale-content">
                <div className="sec-flashsale-cards">
                    {
                        flashsale.map((product: Product) => (<ProductCard key={product.articleNumber} product={product} />))
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