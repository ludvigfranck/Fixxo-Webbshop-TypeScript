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

    const getProducts = async (take = 0) => {
        const res = await fetch(url + `?take=${take}`)
        setProducts(await res.json())
    }

    return <ProductContext.Provider value={{products, getProducts}}>
        {children}
    </ProductContext.Provider>
}

export default ProductProvider