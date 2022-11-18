import React from 'react'
import BannerSection from '../sections/BannerSection'
import FeaturedProductsSection from '../sections/FeaturedProductsSection'
import HomeViewHeader from '../sections/HomeViewHeader'

const HomeView: React.FC = () => {
return (
    <>
      <HomeViewHeader />
      <BannerSection />
      <FeaturedProductsSection />
    </>
  )
}

export default HomeView