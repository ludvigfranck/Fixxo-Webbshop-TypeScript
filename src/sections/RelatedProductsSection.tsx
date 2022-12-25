import React from 'react'
import ProductCard from '../components/ProductCard'
import { Product } from '../models/productModel'

interface IRelatedProducts {
    relatedProducts: Product[]
}

const RelatedProductsSection: React.FC<IRelatedProducts> = ({relatedProducts}) => {
    return (
        <section className="related-products">
            <div className="container">
                <h1>Related Products</h1>
                <div>
                    {
                        relatedProducts.map((product: Product) => (<ProductCard product={product} key={product.articleNumber} />))
                    }
                </div>
            </div>
        </section>
    )
}

export default RelatedProductsSection