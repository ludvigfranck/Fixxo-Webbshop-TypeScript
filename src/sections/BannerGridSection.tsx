import React from 'react'
import ConsciousBanner from '../components/ConsciousBanner'
import TopPicksBanner from '../components/TopPicksBanner'

const BannerGridSection: React.FC = () => {
  return (
    <section className="banner-grid">
        <div className="container">
            <TopPicksBanner />
            <ConsciousBanner />
        </div>
    </section>
  )
}

export default BannerGridSection