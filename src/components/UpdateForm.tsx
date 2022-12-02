import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'
import { IProductContext } from '../models/productModel'

const UpdateForm = () => {
    const { product, setProduct, updateProduct } = useContext(ProductContext) as IProductContext

    const price = (e: any) => {
        let num: number = e.target.value
        setProduct({...product, price: num})
    }
    
    return (
        <>
            <form className="update-form" onSubmit={updateProduct}>
                <div className="product-input">
                    <label className="input-title">Update Name</label>
                    <input value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})} className="form-input" placeholder="Update Name..." />
                </div>
                <div className="product-input">
                    <label className="input-title">Update Category</label>
                    <input value={product.category} onChange={(e) => setProduct({...product, category: e.target.value})} className="form-input" placeholder="Update Category..." />
                </div>
                <div className="product-input">
                    <label className="input-title">Update Price</label>
                    <input value={product.price} onChange={price} className="form-input" placeholder="Update Price..." />
                </div>
                <div className="product-input">
                    <label className="input-title">Update Image</label>
                    <input value={product.imageName} onChange={(e) => setProduct({...product, imageName: e.target.value})} className="form-input" placeholder="Update Image..." />
                </div>
            </form>
        </>
    )
}

export default UpdateForm