import { Product } from "./productModel"

export interface CartProduct {
    articleNumber: string
    quantity: number
    product: Product
}

export interface ShoppingCartModel {
    cartProducts: CartProduct[]
    cartQuantity: number
    incrementCart: (articleNumber: string, product: Product) => void
    decrementCart: (articleNumber: string) => void
    removeProduct: (articleNumber: string) => void
}