export interface Product {
    tag?: string
    articleNumber: string
    name: string
    description?: string
    category?: string
    price: number
    imageName: string
    status?: boolean
}

export interface IProductContext {
    product: Product
    setProduct: React.Dispatch<React.SetStateAction<Product>>
    products: Product[]
    featured: Product[]
    flashsale: Product[]
    sale: Product[]
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>
    getProducts: () => void
    createProduct: (e: React.FormEvent) => void
    getProduct: (articleNumber?: string) => void
    updateProduct: (e: React.FormEvent) => void
    removeProduct: (articleNumber: string) => void
    getFeatured: (take?: number) => void
    getFlashsale: (take?: number) => void
    getSale: (take?: number) => void
}

