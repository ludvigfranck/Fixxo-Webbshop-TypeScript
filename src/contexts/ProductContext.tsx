import React, { useState, createContext, useContext } from 'react'
import { IProductContext, Product } from '../models/productModel'

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

    const [product, setProduct] = useState<Product>(default_product)
    const [products, setProducts] = useState<Product[]>([])
    const [featured, setFeatured] = useState<Product[]>([])
    const [flashsale, setFlashsale] = useState<Product[]>([])
    const [sale, setSale] = useState<Product[]>([])

    const createProduct = async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await fetch(baseUrl, {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        if(res.status === 201) {
            setProduct(default_product)
            console.log(await res.json())
        } else {
            console.log('error')
        }
    }

    const getProducts = async () => {
        const res = await fetch(baseUrl)
        setProducts(await res.json())
    }

    const getProduct = async (articleNumber?: string) => {
        const res = await fetch(`${baseUrl}/product/details/${articleNumber}`)
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
        let url = `${baseUrl}/FeaturedProducts`
        if(take !== 0)
            url += `/${take}`

        const res = await fetch(url)
        setFeatured(await res.json())
    }

    const getFlashsale = async (take: number = 0) => {
        let url = `${baseUrl}/FlashsaleProducts`
        if(take !== 0)
            url += `/${take}`

        const res = await fetch(url)
        setFlashsale(await res.json())
    }

    const getSale = async (take: number = 0) => {
        let url = `${baseUrl}/SaleProducts`
        if(take !== 0)
            url += `/${take}`

        const res = await fetch(url)
        setSale(await res.json())
    }

    return <ProductContext.Provider value={{product, setProduct, products, setProducts, featured, getFeatured, flashsale, getFlashsale, sale, getSale, createProduct, getProduct, getProducts, updateProduct, removeProduct}}>
        {children}
    </ProductContext.Provider>
}

export default ProductProvider