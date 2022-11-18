import React from 'react'
import FeaturedProductsSection from '../sections/FeaturedProductsSection'
import HomeViewHeader from '../sections/HomeViewHeader'

const HomeView: React.FC = () => {
return (
    <>
      <HomeViewHeader />
      <FeaturedProductsSection />
    </>
  )
}

export default HomeView