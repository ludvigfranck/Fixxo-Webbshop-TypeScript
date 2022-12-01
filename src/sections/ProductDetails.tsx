import React from 'react'
import ProductImageGrid from '../components/ProductImageGrid'
import { Product } from '../models/productModel'

interface ProductProps {
  product: Product
}

const ProductDetails: React.FC = ({}) => {
  return (
    <section className="product">
        <div className="container"></div>
        <ProductImageGrid />
    </section>
  )
}

export default ProductDetails