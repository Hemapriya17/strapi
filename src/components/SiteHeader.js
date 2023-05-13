import React from 'react'
import { Link } from "react-router-dom"

export const SiteHeader = () => {
    return (
        <div className='site-header'>
            <Link to='/'>
                <h1>Strapi backend</h1>
            </Link>
        </div>
    )
}
