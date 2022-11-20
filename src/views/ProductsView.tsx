import React, { useEffect } from 'react'
import NavbarSection from '../sections/NavbarSection'
import { ProductContextData, Product } from '../models/productModel'
import { ProductContext } from '../contexts/ProductContext'
import ProductCard from '../components/ProductCard'

const ProductsView: React.FC = () => {
  const {products, getProducts} = React.useContext(ProductContext) as ProductContextData

  useEffect(() => {
    getProducts("")
  }, [])

  return (
    <>
      <NavbarSection />
      <section className="mt-5">
        <div className="container text-center">
          <h1 className="mb-5">Products</h1>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
            {
              products.map((product: Product) => (<ProductCard product={product} key={product.articleNumber} />))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductsView