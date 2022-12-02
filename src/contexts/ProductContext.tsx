import React, { useState, createContext, useContext } from 'react'
import { IProductContext, Product, ReqProduct } from '../models/productModel'

interface ProviderProps {
    children: any
}

export const ProductContext = createContext<IProductContext | null>(null)

export const useProductContext = () => {
    return useContext(ProductContext)
}

const ProductProvider = ({children}: ProviderProps) => {
    const url: string = 'http://localhost:5000/api/products'
    const default_product = {
        articleNumber: "", 
        name: "",
        category: "",
        price: 0,
        imageName: ""
    }
    const default_reqProduct = {
        articleNumber: "", 
        name: "",
        category: "",
        price: 0,
        imageName: ""
    }

    const [product, setProduct] = useState<Product>(default_product)
    const [reqProduct, setReqProduct] = useState<ReqProduct>(default_reqProduct)
    const [products, setProducts] = useState<Product[]>([])

    const createProduct = async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await fetch(url, {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(reqProduct)
        })
        if(res.status === 201) {
            setReqProduct(default_product)
            console.log(await res.json())
        } else {
            console.log('error')
        }
    }

    const getProducts = async () => {
        const res = await fetch(url)
        if(res.status === 200)
            setProducts(await res.json())
    }

    const getProduct = async (articleNumber: string) => {
        console.log(articleNumber)
        const res = await fetch(`${url}/${articleNumber}`)
        if(res.status === 200)
            setProduct(await res.json())
    }

    const updateProduct = async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await fetch(`${url}/${product.articleNumber}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(product)
        })
    }

    const removeProduct = async (articleNumber: string) => {
        const res = await fetch(`${url}/${articleNumber}`, { method: 'delete' })
        if(res.status === 204)
            setProduct(default_product)
    }

    return <ProductContext.Provider value={{product, setProduct, reqProduct, setReqProduct, products, setProducts, createProduct, getProduct, getProducts, updateProduct, removeProduct}}>
        {children}
    </ProductContext.Provider>
}

export default ProductProvider