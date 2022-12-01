import React from 'react'
import { ProductContext } from '../contexts/ProductContext'
import { IProductContext } from '../models/productModel'

const CreateProductSection = () => {
    const { reqProduct, setReqProduct, createProduct } = React.useContext(ProductContext) as IProductContext

    const price = (e: any) => {
        let num: number = e.target.value
        setReqProduct({...reqProduct, price: num})
    }

    return (
        <section className="product-create">
            <div className="container">
                <form onSubmit={createProduct} className="create-form">
                    <h3  className="create-title">Create Product</h3>
                    <div className="product-input">
                        <label className="input-title">Product Name</label>
                        <input value={reqProduct.name} onChange={(e) => setReqProduct({...reqProduct, name: e.target.value})} type="text" className="form-input" placeholder='Type Product name...' />
                    </div>
                    <div className="product-input">
                        <label className="input-title">Product Category</label>
                        <input value={reqProduct.category} onChange={(e) => setReqProduct({...reqProduct, category: e.target.value})} type="text" className="form-input" placeholder='Type Product category...' />
                    </div>
                    <div className="product-input">
                        <label className="input-title">Product Price</label>
                        <input value={reqProduct.price} onChange={price} type="number" className="form-input" placeholder='Type Product price...' />
                    </div>
                    <div className="product-input">
                        <label className="input-title">Product Image</label>
                        <input value={reqProduct.imageName} onChange={(e) => setReqProduct({...reqProduct, imageName: e.target.value})} type="text" className="form-input" placeholder='Type Product image...' />
                    </div>
                    <button type="submit" className="create-btn">CREATE PRODUCT</button>
                </form>
            </div>
        </section>
    )
}

export default CreateProductSection