import React from 'react'
import CreateProductSection from '../sections/CreateProductSection'
import NavbarSection from '../sections/NavbarSection'
import RemoveProductSection from '../sections/RemoveProductSection'
import UpdateProductSection from '../sections/UpdateProductSection'

const EditView: React.FC = () => {
    return (
        <>
            <NavbarSection />
            <UpdateProductSection />
            <RemoveProductSection />
            <CreateProductSection />
        </>
    )
}

export default EditView