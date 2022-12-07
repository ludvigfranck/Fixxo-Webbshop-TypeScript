import React, { useContext, useEffect } from 'react'
import { IProductContext, Product } from '../models/productModel'
import { ProductContext } from '../contexts/ProductContext'
import ProductCard from './ProductCard'

const SaleCards: React.FC = () => { 
  const { sale, getSale } = useContext(ProductContext) as IProductContext
  
  useEffect(() => {
    getSale(3)
  }, [])
  
  return (
    <>
      {
        sale.map((product: Product) => (<ProductCard key={product.articleNumber} product={product} />))
      }
    </>
  )
}

export default SaleCards