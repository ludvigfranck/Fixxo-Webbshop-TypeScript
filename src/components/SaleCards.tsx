import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { ProductContextData, Product } from '../models/productModel'
import { ProductContext } from '../contexts/ProductContext'

const SaleCards: React.FC = () => {
    const { saleProducts, getSaleProducts } = React.useContext(ProductContext) as ProductContextData
  
    useEffect(() => {
        getSaleProducts(3)
      }, [])

    return (
    <>
    {
        saleProducts.map((product: Product) => (<ProductCard key={product.articleNumber} product={product} />))
    }
    </>
  )
}

export default SaleCards