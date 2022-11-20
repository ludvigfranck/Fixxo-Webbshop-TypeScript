import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { ProductContextData, Product } from '../models/productModel'
import { ProductContext } from '../contexts/ProductContext'


const FeaturedProductsSection: React.FC = () => {
const { featuredProducts, getFeaturedProducts } = React.useContext(ProductContext) as ProductContextData

useEffect(() => {
  getFeaturedProducts(8)
}, [])
  
  return (
    <section className="product-grid">
        <div className="container">
            <h1 data-testid="title">FEATURED PRODUCTS</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4" data-testid="featuredProducts">
            {
              featuredProducts.map((product: Product) => (<ProductCard product={product} key={product.articleNumber} />))
            }
            </div>
        </div>
    </section>
  )
}

export default FeaturedProductsSection