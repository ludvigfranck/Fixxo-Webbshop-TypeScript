import React, { useContext, useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import UpdateForm from '../components/UpdateForm'
import { ProductContext } from '../contexts/ProductContext'
import { IProductContext, Product } from '../models/productModel'

const UpdateProductSection = () => {
    const { products, getProducts, getProduct, product, setProduct } = useContext(ProductContext) as IProductContext
    const [showUpdateForm, setShowUpdateForm] = useState<boolean>(false)
    const [productArticleNumber, setProductArticleNumber] = useState<string>("")
    const [showProduct, setShowProduct] = useState<boolean>(false)

    let input = document.getElementById("articleNumber") as HTMLFormElement
    let error = document.getElementById('error') as HTMLSpanElement
    const errorMessage = "It seems like this article number does not exist!  Try again"

    useEffect(() => {
        getProducts()
    }, [])

    const handleChange = (e: React.FormEvent) => {
        e.preventDefault()

        products.map((product: Product) => {
            if(product.articleNumber !== input.value) {
                console.log(error.innerText = errorMessage)
            } else {
                setShowUpdateForm(true)
                error.remove()
                getProduct(input.value)
                setProductArticleNumber(input.value)
                setShowProduct(true)
                setProduct(product)
            } 
        })
    }

    return (
        <section className="update-product">
            <div className="container">
                <form className="get-form">
                    <div className="get-product">
                        <h3>Update Product</h3>
                        <input id="articleNumber" type="text" className="get-input" placeholder="Type Product article number..." />
                        <span id="error" className="articleNumber-error"></span> 
                        <button onClick={handleChange} className="update-btn">GET PRODUCT</button>
                    </div>
                </form>
                {
                    showProduct ? (
                        <div className="product">
                            <h3>Your'e Product</h3>
                            <ProductCard key={productArticleNumber} product={product} />
                        </div>) : (<></>)
                }
                {
                    showUpdateForm ? (
                        <div className="form-container">
                            <UpdateForm key={productArticleNumber} />
                        </div>) : (<></>)
                }
            </div>
        </section>
    )
}

export default UpdateProductSection