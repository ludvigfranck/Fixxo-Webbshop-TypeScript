import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import { ProductContext } from '../contexts/ProductContext'
import { IProductContext } from '../models/productModel'
import DetailsTabs from '../sections/DetailsTabs'
import NavbarSection from '../sections/NavbarSection'
import ProductDetailsSection from '../sections/ProductDetailsSection'
import RelatedProductsSection from '../sections/RelatedProductsSection'

const ProductDetailView: React.FC = () => {
  const { getProduct, product, featured, getFeatured } = useContext(ProductContext) as IProductContext
  const { id } = useParams<string>()

  useEffect(() => {
    getProduct(id)
    getFeatured(4)
  }, [])

  /*
    Finns inte någon funktionalitet på denna sida heller. Samt inte responsiv. Ännu en gång så 
    fanns inte tiden till detta. Men sättet den hämtar produkter på funkar. 
  */

  return (
    <>
    <NavbarSection />
    <Breadcrumb currentPage="Details" />
    <ProductDetailsSection product={product} />
    <DetailsTabs />
    <RelatedProductsSection relatedProducts={featured} />
    </>
  )
}

export default ProductDetailView