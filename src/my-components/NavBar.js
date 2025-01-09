import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo_3 from '../Assests/logo_3.jpg'

function Navbar() {
    return (
        <div>
            <div className="main-header">
                <div className="logobox">
                    <img src={Logo_3} alt="Logo" />
                </div>

                <div className="navbar">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} > Home </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Gallery" className={({ isActive }) => (isActive ? 'active' : '')} > Gallery </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Artists" className={({ isActive }) => (isActive ? 'active' : '')} > Artists </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Shop" className={({ isActive }) => (isActive ? 'active' : '')} > Shop </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Contact" className={({ isActive }) => (isActive ? 'active' : '')} > Contact </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        </div>


    );
}
export default Navbar;