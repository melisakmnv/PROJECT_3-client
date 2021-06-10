import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/Navbar.css'

const Navbar = () => {
    return (
        <aside>
            <ul className="NavBar__List">
                <li>
                    <NavLink className="NavBar__Item" exact to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="NavBar__Item" exact to="/plants">Plants</NavLink>
                </li>
                <li>
                    <NavLink className="NavBar__Item" exact to="/recipes">Recipes</NavLink>
                </li>
                <li>
                    <NavLink className="NavBar__Item" exact to="/account">Account</NavLink>
                </li>
            </ul>
        </aside>
    )
}

export default Navbar;