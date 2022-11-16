import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavbarLink } from '../models/navbarLinkModel'

const NavbarLinks: React.FC<NavbarLink> = ({icon, link, hideOnMobile, badge}) => {
  return (
    <NavLink className={`nav-icon ${hideOnMobile ? "d-none d-md-flex" : ""}`} to={link} end>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">{badge}</span>
        <i className={`${icon}`}></i>
    </NavLink>
  )
}

export default NavbarLinks