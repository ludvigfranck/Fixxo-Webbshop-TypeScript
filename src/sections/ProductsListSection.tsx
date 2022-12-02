import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { ProductContext } from '../contexts/ProductContext'
import { IProductContext, Product } from '../models/productModel'

const ProductsListSection = () => {
    const { products, getProducts } = React.useContext(ProductContext) as IProductContext
    
    useEffect(() => {
        getProducts()
    }, [getProducts])

    return (
    <section className="product-list">
        <h3>LIST OF PRODUCTS</h3>
        <div className="container">
            <div className="product-container">
                {
                    products.map((product: Product) => (<ProductCard key={product.articleNumber} product={product} />))
                }
            </div>
        </div>
    </section>
    )
}   

export default ProductsListSection