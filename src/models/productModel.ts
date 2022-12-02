export interface Product {
    articleNumber: string
    name: string
    description?: string
    category?: string
    price: number
    imageName: string
    status?: boolean
}

export interface ReqProduct {
    articleNumber: string
    name: string
    category: string
    price: number
    imageName: string
}

export interface IProductContext {
    product: Product
    setProduct: React.Dispatch<React.SetStateAction<Product>>
    reqProduct: ReqProduct
    setReqProduct: React.Dispatch<React.SetStateAction<ReqProduct>>
    products: Product[]
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>
    getProducts: () => void
    createProduct: (e: React.FormEvent) => void
    getProduct: (articleNumber: string) => void
    updateProduct: (e: React.FormEvent) => void
    removeProduct: (articleNumber: string) => void
}

