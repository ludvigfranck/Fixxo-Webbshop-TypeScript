export interface Product {
    articleNumber: string
    name: string
    description?: string
    category?: string
    price: number
    rating: string
    imageName: string
    status?: boolean
}

export interface ProductContextData {
    products: Product[]
    featuredProducts: Product[]
    flashsaleProducts: Product[]
    secFlashsaleProducts: Product[]
    saleProducts: Product[]
    getProducts: (url: string) => void
    getFeaturedProducts: (take: number) => void
    getFlashsaleProducts: (take: number) => void
    getSecFlashsaleProducts: (take: number) => void
    getSaleProducts: (take: number) => void
}

