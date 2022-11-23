import React from 'react'
import BannerGridSection from '../sections/BannerGridSection'
import BannerSection from '../sections/BannerSection'
import FeaturedProductsSection from '../sections/FeaturedProductsSection'
import FlashSaleSection from '../sections/FlashSaleSection'
import HomeViewHeader from '../sections/HomeViewHeader'
import SpecialitySection from '../sections/SpecialitySection'

const HomeView: React.FC = () => {
return (
    <>
      <HomeViewHeader />
      {/* <BannerSection /> */}
      <FeaturedProductsSection />
      {/* <BannerGridSection />
      <SpecialitySection />
      <FlashSaleSection /> */}
    </>
  )
}

export default HomeView