import React, { useState, createContext, useContext } from 'react'
import { ProductContextData, Product } from '../models/productModel'

interface ProviderProps {
    children: any
}

export const ProductContext = createContext<ProductContextData | null>(null)

export const useProductContext = () => {
    return useContext(ProductContext)
}

const ProductProvider = ({children}: ProviderProps) => {
    const url: string = 'https://win22-webapi.azurewebsites.net/api/products'

    const [products, setProducts] = useState<Product[]>([])
    const [featuredProducts, setFeaturedProducts] = useState<Product[]>([])
    const [flashsaleProducts, setFlashsaleProducts] = useState<Product[]>([])

    const getProducts = async () => {
        const res = await fetch(url)
        setProducts(await res.json())
    }

    const getFeaturedProducts = async (take = 0) => {
        const res = await fetch(url + `?take=${take}`)
        setFeaturedProducts(await res.json())
    }

    const getFlashsaleProducts = async (take = 0) => {
        const res = await fetch(url + `?take=${take}`)
        setFlashsaleProducts(await res.json())
    }

    return <ProductContext.Provider value={{products, getProducts, featuredProducts, getFeaturedProducts, flashsaleProducts, getFlashsaleProducts}}>
        {children}
    </ProductContext.Provider>
}

export default ProductProvider