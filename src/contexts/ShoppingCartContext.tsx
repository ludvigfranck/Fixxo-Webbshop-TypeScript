import { createContext, ReactNode, useContext, useState } from "react"
import { Product } from "../models/productModel"
import { CartProduct, ShoppingCartModel } from '../models/shoppingCartModel'
import ShoppingCartSection from '../sections/ShoppingCartSection'

interface ProviderProps {
    children: ReactNode
}

const ShoppingCartContext = createContext({} as ShoppingCartModel)

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ({children}: ProviderProps) => {
    const [cartProducts, setCartProducts] = useState<CartProduct[]>([])

    const cartQuantity = cartProducts.reduce(
        (quantity, product) => product.quantity + quantity, 0
    )

    const incrementCart = (articleNumber: string, product: Product) => {
        setCartProducts(currProducts => {
            if(currProducts.find(product => product.articleNumber === articleNumber) == null) {
                return [...currProducts, { articleNumber, product, quantity: 1 }]
            } else {
                return currProducts.map(product => {
                    if(product.articleNumber === articleNumber) {
                        return {...product, quantity: product.quantity + 1}
                    } else {
                        return product
                    }
                })
            }
        })
    }
    
    const decrementCart = (articleNumber: string) => {
        setCartProducts(products => {
            if(products.find(product => product.articleNumber === articleNumber)?.quantity === 1) {
                return products.filter(product => product.articleNumber !== articleNumber)
            } else {
                return products.map(product => {
                    if(product.articleNumber === articleNumber) {
                        return { ...product, quantity: product.quantity - 1 }
                    } else {
                        return product
                    }
                })
            }
        })
    }

    const removeProduct = (articleNumber: string) => {
        setCartProducts(products => {
            return products.filter(product => product.articleNumber !== articleNumber)
        })
    }

    return <ShoppingCartContext.Provider value={{cartProducts, cartQuantity, incrementCart, decrementCart, removeProduct}}>
        {children}
        <ShoppingCartSection />
    </ShoppingCartContext.Provider> 
}