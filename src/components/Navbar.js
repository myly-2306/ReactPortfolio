import React from 'react'

export const Navbar = () => {
    return (
        <header>
            <nav className="cf">
                <ul className="cf">
                    <li>
                        <a href="/">About Me</a>
                    </li>
                    <li>
                        <a href="/project">Portfolio</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                    <li>
                        <a href="/resume" id="openup">Resume</a>
                    </li>
                </ul>
                
            </nav>
        </header>
    )
}
