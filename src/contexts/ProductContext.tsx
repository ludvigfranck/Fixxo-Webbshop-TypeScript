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
    const baseUrl: string = 'http://localhost:5000/api/products'
    const default_product = {
        tag: "",
        articleNumber: "", 
        name: "",
        category: "",
        price: 0,
        imageName: ""
    }
    const default_reqProduct = {
        tag: "",
        articleNumber: "", 
        name: "",
        category: "",
        price: 0,
        imageName: ""
    }

    const [product, setProduct] = useState<Product>(default_product)
    const [reqProduct, setReqProduct] = useState<ReqProduct>(default_reqProduct)
    const [products, setProducts] = useState<Product[]>([])
    const [featured, setFeatured] = useState<ReqProduct[]>([])
    const [flashsale, setFlashsale] = useState<ReqProduct[]>([])
    const [sale, setSale] = useState<ReqProduct[]>([])

    const createProduct = async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await fetch(baseUrl, {
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
        const res = await fetch(baseUrl)
        if(res.status === 200)
            setProducts(await res.json())
    }

    const getProduct = async (articleNumber: string) => {
        console.log(product)
        const res = await fetch(`${baseUrl}/details/${articleNumber}`)
        if(res.status === 200)
            setProduct(await res.json())
    }

    const updateProduct = async (e: React.FormEvent) => {
        e.preventDefault()
        const res = await fetch(`${baseUrl}/details/${product.articleNumber}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(product)
        })
    }

    const removeProduct = async (articleNumber: string) => {
        const res = await fetch(`${baseUrl}/details/${articleNumber}`, { method: 'delete' })
        if(res.status === 204)
            setProduct(default_product)
    }

    const getFeatured = async (take: number = 0) => {
        let url = `${baseUrl}/featured`
        if(take !== 0)
            url += `/${take}`

        const res = await fetch(url)
        setFeatured(await res.json())
    }

    const getFlashsale = async (take: number = 0) => {
        let url = `${baseUrl}/flashsale`
        if(take !== 0)
            url += `/${take}`

        const res = await fetch(url)
        setFlashsale(await res.json())
    }

    const getSale = async (take: number = 0) => {
        let url = `${baseUrl}/sale`
        if(take !== 0)
            url += `/${take}`

        const res = await fetch(url)
        setSale(await res.json())
    }

    return <ProductContext.Provider value={{product, setProduct, reqProduct, setReqProduct, products, setProducts, featured, getFeatured, flashsale, getFlashsale, sale, getSale, createProduct, getProduct, getProducts, updateProduct, removeProduct}}>
        {children}
    </ProductContext.Provider>
}

export default ProductProvider