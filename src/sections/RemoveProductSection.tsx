import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../contexts/ProductContext'
import { IProductContext, Product } from '../models/productModel'

const RemoveProductSection = () => {
    const { products, getProducts, removeProduct } = useContext(ProductContext) as IProductContext

    const [removeForm, setRemoveForm] = useState<Boolean>(false)

    let removeValue = document.getElementById("remove-art") as HTMLInputElement
    let removeError = document.getElementById("remove-error") as HTMLSpanElement
    const removeError_message: string = "It seems like this article number does not exist!  Try again"
    let removedProduct = document.getElementById("removed-product") as HTMLHeadElement

    useEffect(() => {
        getProducts()
    }, [])

    const handleChange = (e: React.FormEvent) => {
        e.preventDefault()

        products.map((product: Product) => {
            if(product.articleNumber != removeValue.value) {
                removeError.innerText = removeError_message
            } else {
                removeError.remove()
                removedProduct.innerText = `Product (${removeValue.value}) was Removed!`
                removeValue.value = ""
                removeProduct(product.articleNumber)
            }
        })
    }

    return (
        <section className="remove-product">
            <div className="container">
                <form className="find-form">
                    <h3>Remove Product</h3>
                    <input id="remove-art" className="find-input" type="text" placeholder="Type Product article number..."></input>
                    <span id="remove-error"></span>
                    <button onClick={handleChange} className="find-btn">REMOVE PRODUCT</button>
                    <h3 id="removed-product"></h3>
                </form>
            </div>
        </section>
    )
}

export default RemoveProductSection