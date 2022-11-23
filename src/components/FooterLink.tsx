import React from 'react'
import { FooterLinkModel } from '../models/footerLinkModel'

const FooterLink: React.FC<FooterLinkModel> = ({link, icon}) => {
  return (
    <a href={link} target="_blank">
        <i className={icon}></i>
    </a>
  )
}

export default FooterLink