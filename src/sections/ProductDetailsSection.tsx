import React from 'react'
import { Product } from '../models/productModel'

interface ProductDetailsType {
    product: Product
}

const ProductDetailsSection: React.FC<ProductDetailsType> = ({product}) => {
    return (
        <section className="product-details">
            <div className="container">
                <div className="details-images">
                    <div className="main-image">
                        <img src={product.imageName} alt={product.name} />
                    </div>
                    <div className="sub-images">
                        <img src={product.imageName} alt={product.name} />
                        <img src={product.imageName} alt={product.name} />
                        <img src={product.imageName} alt={product.name} />
                    </div>
                </div>
                <div className="product-info">
                    <div className="info-section">
                        <h1 className="product-name">{product.name}</h1>
                        <p>SKU: 12345670 BRAND: The Northland</p>
                        <span className="product-rating">
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                        </span>
                        <h4 className="product-price">{product.price} $</h4>
                        <p className="product-description">
                            Discovered had get considered projection who favourable. 
                            Necessary up knowledge it tolerably. Unwilling departure 
                            education is be dashwoods or an. Use off agreeable law 
                            unwilling sir deficient curiosity instantly. (read more) 
                        </p>
                    </div>
                    <form className="info-form">
                        <div className="titles">
                            <h5>Size:</h5>
                            <h5>Color:</h5>
                            <h5>Qty:</h5>
                            <h5>Share:</h5>
                        </div>
                        <div className="inputs">
                            <ul className='size'>
                                <li>
                                    <input type="checkbox" id="small" name="small" value="small"></input>
                                    <label htmlFor="small">S</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="medium" name="medium" value="medium"></input>
                                    <label htmlFor="medium">M</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="large" name="large" value="large"></input>
                                    <label htmlFor="large">L</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="x-large" name="x-large" value="x-large"></input>
                                    <label htmlFor="x-large">XL</label>
                                </li>
                            </ul>
                            <div className="color">
                                <button className="color-btn">Choose an option</button>
                            </div>
                            <div className="submit">
                                <div className="quantity">
                                    <button className="quantity-btn">+</button>
                                    <div className="quantity-count">0</div>
                                    <button className="quantity-btn">-</button>
                                </div>
                                <button className="submit-btn">ADD TO CART</button>
                            </div>
                            <div className="share-box">
                                <ul className="share">
                                    <li className="share-link">
                                        <a><i className="fa-brands fa-facebook-f"></i></a>
                                    </li>
                                    <li className="share-link">
                                        <a><i className="fa-brands fa-instagram"></i></a>
                                    </li>
                                    <li className="share-link">
                                        <a><i className="fa-brands fa-twitter"></i></a>
                                    </li>
                                    <li className="share-link">
                                        <a><i className="fa-brands fa-google"></i></a>
                                    </li>
                                    <li className="share-link">
                                        <a><i className="fa-brands fa-linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ProductDetailsSection