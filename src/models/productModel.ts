export interface Product {
    articleNumber: number
    name: string
    description?: string
    category: string
    price: number
    rating: string
    imageName: string
    status: boolean
}

export interface ProductContextData {
    products: Product[]
    getProducts: (take: number) => void
}

