import React from 'react'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import { Product } from '../models/productModel'

interface ProductProps {
    product: Product
    quantity: number
}

const ShoppingCartProduct = ({product, quantity}: ProductProps) => {
    const { incrementCart, decrementCart, removeProduct } = useShoppingCart()
    
    return (
    <div className="shoppingCart-item">
        <div className="item-image">
            <img src={product.imageName} alt={product.name} />
        </div>
        <div className="item-info">
            <div className="item-info-name">{product.name}</div>
            <div className="item-info-quantity">
                <button onClick={() => incrementCart(product.articleNumber, product)}>+</button>
                <div className="item-quantity">{quantity}</div>
                <button onClick={() => decrementCart(product.articleNumber)}>-</button>
            </div>
        </div>
        <div className="item-price">
            <div>{product.price}SEK</div>
            <button onClick={() => removeProduct(product.articleNumber)}><i className="fa-regular fa-trash"></i></button>
        </div>
    </div>
  )
}

export default ShoppingCartProduct