import React from 'react'
import { NavLink } from 'react-router-dom'
import {ProductContext} from '../contexts/ProductContext'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import { IProductContext, Product } from '../models/productModel'

interface ProductProps {
    product: Product
  }

const ProductCard: React.FC<ProductProps> = ({product}) => {
    const { incrementCart } = useShoppingCart()
    const { removeProduct } = React.useContext(ProductContext) as IProductContext
    
    const remove = (articleNumber: string) => {
        removeProduct(articleNumber)
    }

    return (
    <div className="col">
        <div className="card">
            <div className="card-img">
                <img src={product.imageName} alt={product.name} />
                <button onClick={() => remove(product.articleNumber)} className="remove-product"><i className="fa-solid fa-xmark"></i></button>
                <div className="card-menu d-xl-none">
                    <button className="menu-link"><i className="fa-regular fa-heart"></i></button>
                    <button className="menu-link"><i className="fa-regular fa-code-compare"></i></button>
                    <button onClick={() => incrementCart(product.articleNumber, product)} className="menu-link"><i className="fa-regular fa-bag-shopping"></i></button>
                </div>
                <NavLink to={`/products/${product.articleNumber}`} className="btn-theme btn-card-theme d-xl-none">
                    <span className="corner-left"></span>
                    <span className="corner-right"></span>
                    QUICK VIEW
                </NavLink>
            </div>
            <div className="card-body">
                <p className="card-category">{product.category}</p>
                <h5 className="card-title">{product.name}</h5>
                <p className="card-rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                </p>
                <p className="card-price">{product.price}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard