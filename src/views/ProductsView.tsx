import React from 'react'
import CreateProductSection from '../sections/CreateProductSection'
import NavbarSection from '../sections/NavbarSection'
import ProductsListSection from '../sections/ProductsListSection'
import UpdateFormSection from '../sections/UpdateProductSection'

const ProductsView: React.FC = () => {
  return (
    <>
      <NavbarSection />
      <ProductsListSection />
    </>
  )
}

export default ProductsView