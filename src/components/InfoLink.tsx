import React from 'react'
import { NavLink } from 'react-router-dom'
import { InfoLinkModel } from '../models/infoLinkModel'

const InfoLink: React.FC<InfoLinkModel> = ({link, icon, title}) => {
  return (
    <div className="customer-info-box">
        <NavLink className="customer-info-icon" to={link}>
            <i className={icon}></i>
        </NavLink>
        <h1 className="customer-info-title">{title}</h1>
        <p className="customer-info-text">Village did removed enjoyed <br /> explain talking.</p>
    </div>
  )
}

export default InfoLink