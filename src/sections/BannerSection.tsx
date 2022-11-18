import React from 'react'
import ClearenceBanner from '../components/ClearenceBanner'
import NewArrivalsBanner from '../components/NewArrivalsBanner'

const BannerSection: React.FC = () => {
  return (
    <section className="banners">
        <div className="container">
            <div className="box-left">
                <ClearenceBanner />
            </div>
            <div className="box-right">
                <NewArrivalsBanner />
            </div>
        </div>
    </section>
  )
}

export default BannerSection