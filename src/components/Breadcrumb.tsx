import React from 'react'
import { NavLink } from 'react-router-dom'

interface ICurrentPage {
    currentPage: string
}

const Breadcrumb: React.FC<ICurrentPage> = ({currentPage}) => {
    return (
        <section className="breadcrumb">
            <div className="container">
                <ul className="breadcrumb-list">
                    <li>
                    <NavLink to="/">Home</NavLink>
                    </li>
                    <li>{currentPage}</li>
                </ul>
            </div>
        </section>
    )
}

export default Breadcrumb