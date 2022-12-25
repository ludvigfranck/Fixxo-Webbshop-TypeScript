import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import ContactFormSection from '../sections/ContactFormSection'
import MapSection from '../sections/MapSection'
import NavbarSection from '../sections/NavbarSection'

const ContactsView: React.FC = () => {
  return (
    <>
      <NavbarSection />
      <Breadcrumb currentPage="Contacts" />
      <MapSection />
      <ContactFormSection />
    </>
    
  )
}

export default ContactsView