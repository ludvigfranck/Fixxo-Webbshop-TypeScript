import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NavbarSection from '../sections/NavbarSection'
import { ProductContext } from '../contexts/ProductContext'
import ProductDetails from '../sections/ProductDetails'

const ProductDetailView: React.FC = () => {
  return (
    <>
    <NavbarSection />
    <ProductDetails />
    </>
  )
}

export default ProductDetailView