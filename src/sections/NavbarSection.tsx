import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import NavbarLinks from '../components/NavbarLinks'
import { useShoppingCart } from '../contexts/ShoppingCartContext'

const NavbarSection: React.FC = () => {
    const { cartQuantity } = useShoppingCart()

    const [showMenu, setShowMenu] = useState<boolean>(false)
  
    const toggleMenu = () => {
      setShowMenu(!showMenu)
    }
  
return (
    <nav className="navbar">
        <div className="container">
            <NavLink className="logo" to="/" end>Fixxo.</NavLink>
            <div className={`nav-links ${showMenu ? "d-grid" : ""}`}>
                <NavLink className="nav-link" to="/" end>Home</NavLink>
                <NavLink className="nav-link" to="/category" end>Category</NavLink>
                <NavLink className="nav-link" to="/products" >Products</NavLink>
                <NavLink className="nav-link" to="/contacts" end>Contacts</NavLink>
                <NavLink className="nav-link" to="/create" end>Create</NavLink>
                <NavLink className="nav-link" to="/update" end>Update</NavLink>
            </div>
            <div className="nav-icon-links">
                <NavbarLinks icon="fa-regular fa-magnifying-glass" link="/search" />
                <NavbarLinks icon="fa-regular fa-code-compare" link="/compare" hideOnMobile={true}/>
                <NavbarLinks icon="fa-regular fa-heart" link="/like" hideOnMobile={true} badge={0} />
                <button className="nav-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartQuantity}</span>
                    <i className="fa-regular fa-bag-shopping"></i>
                </button>
                <button onClick={toggleMenu} className="nav-icon btn-nav-icon d-xl-none"><i className="fa-regular fa-bars"></i></button>
            </div>
        </div>
    </nav>
  )
}

export default NavbarSection