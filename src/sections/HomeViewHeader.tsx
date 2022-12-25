import React from 'react'
import NavbarSection from './NavbarSection'
import ShowcaseSection from './ShowcaseSection'

const HomeViewHeader: React.FC = () => {
  return (
    <section className="gradient-gray">
        <NavbarSection />
        <ShowcaseSection />
    </section>
  )
}

export default HomeViewHeader