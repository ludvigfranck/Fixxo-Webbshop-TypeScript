import React, { useContext, useState } from 'react'
import { ProductContext } from '../contexts/ProductContext'
import { IProductContext } from '../models/productModel'

interface ProductArticleNumberProps {
    key: string
}

const UpdateForm: React.FC<ProductArticleNumberProps> = ({key}) => {
    const { product, setProduct, updateProduct } = useContext(ProductContext) as IProductContext

    const url: string = 'http://localhost:5000/api/products'

    const [success, setSuccess] = useState<boolean>(false)
    const [fail, setFail] = useState<boolean>(false)

    const price = (e: any) => {
        let num: number = e.target.value
        setProduct({...product, price: num})
    }

    const handleChange = async () => {
        // Osäker på om denna funkar att validera med...
        const res = await fetch(`${url}/${key}`)
        if(res.status === 200)
            setSuccess(true)
        else 
            setFail(true) 
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
                <button onClick={handleChange} type="submit" className="update-btn">UPDATE PRODUCT</button>
            </form>
            {
                success ? (
                <div className="updated-product mt-5">
                    <h3 className="succes">Your'e update was succsesfull!</h3>
                </div>) : (<></>)
            }
            {
                fail ? (
                <div className="updated-product mt-5">
                    <h3 className="fail">Your'e update was unsuccesfull!</h3>
                </div>) : (<></>)
            }
        </>
    )
}

export default UpdateForm