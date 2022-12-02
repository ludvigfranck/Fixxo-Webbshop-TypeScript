import React from 'react'
import CreateProductSection from '../sections/CreateProductSection'
import FooterSection from '../sections/FooterSection'
import NavbarSection from '../sections/NavbarSection'
import ProductsListSection from '../sections/ProductsListSection'

const CreateView: React.FC = () => {
  return (
    <>
        <NavbarSection />
        <CreateProductSection />
        <ProductsListSection />
        <FooterSection />
    </>
  )
}

export default CreateView