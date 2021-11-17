import React from 'react';
import {Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <header>
            <nav className="cf">
                <ul className="cf">
                    <li>
                        <Link to="/">About Me</Link>
                    </li>
                    <li>
                        <Link to="/project">Portfolio </Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/resume" id="openup">Resume</Link>
                    </li>
                </ul>
                
            </nav>
        </header>
    )
}
