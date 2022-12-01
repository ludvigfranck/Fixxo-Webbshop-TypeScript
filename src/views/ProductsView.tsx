import React from 'react'
import CreateProductSection from '../sections/CreateProductSection'
import NavbarSection from '../sections/NavbarSection'
import ProductsListSection from '../sections/ProductsListSection'

const ProductsView: React.FC = () => {
  return (
    <>
      <NavbarSection />
      <CreateProductSection />
      <ProductsListSection />
    </>
  )
}

export default ProductsView