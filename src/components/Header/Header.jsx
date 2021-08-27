import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
    return(
        <div className="contenedor--header">
            <h3>Logo</h3>
            <nav>
                <NavLink className="navLinks" to="/">Home</NavLink>
                <NavLink className="navLinks" to="/Contacto">Contacto</NavLink>
                <NavLink className="navLinks" to="/Blog">Blog</NavLink>
            </nav>
        </div>
    )
}

export { Header }