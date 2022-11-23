import React from 'react'
import InfoLink from '../components/InfoLink'

const InfoSection: React.FC = () => {
  return (
    <section className="customer-info">
        <div className="customer-info-border"></div>
        <div className="container">
            <InfoLink link="/" icon="fa-regular fa-headset" title="Customer Support" />
            <InfoLink link="/" icon="fa-regular fa-credit-card" title="Secured Payment" />
            <InfoLink link="/" icon="fa-regular fa-truck" title="Free Home Delivery" />
            <InfoLink link="/" icon="fa-regular fa-truck" title="30 Day Reuters" />
        </div>
    </section>
  )
}

export default InfoSection