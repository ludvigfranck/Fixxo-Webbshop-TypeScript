import React from 'react'
import BannerGridSection from '../sections/BannerGridSection'
import BannerSection from '../sections/BannerSection'
import DiscountSection from '../sections/DiscountSection'
import FeaturedProductsSection from '../sections/FeaturedProductsSection'
import FlashSaleSection from '../sections/FlashSaleSection'
import FooterSection from '../sections/FooterSection'
import HomeViewHeader from '../sections/HomeViewHeader'
import InfoSection from '../sections/InfoSection'
import SaleGridSection from '../sections/SaleGridSection'
import SecFlashSaleSection from '../sections/SecFlashSaleSection'
import SpecialitySection from '../sections/SpecialitySection'

const HomeView: React.FC = () => {
return (
    <>
      <HomeViewHeader />
      <BannerSection />
      <FeaturedProductsSection />
      <BannerGridSection />
      <SpecialitySection />
      <FlashSaleSection />
      <SecFlashSaleSection />
      <DiscountSection />
      <SaleGridSection />
      <InfoSection />
      <FooterSection />
    </>
  )
}

export default HomeView