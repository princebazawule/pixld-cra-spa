import React from "react"
import { useLocation } from "react-router-dom";
import { NavHashLink as Link } from 'react-router-hash-link'
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";


const Navbar = () => {

    let location = useLocation();

    return ( 
        <nav>
            <Link to='/#home' className='pixld-logo' title='pixld-logo'>
                <Logo />
            </Link>
            
            <input className='menu-btn' type='checkbox' id='menu-btn' />
            <label className='menu-icon' htmlFor='menu-btn'>
                <span className='nav-icon'></span>
            </label>

            <ThemeToggle />
            
            <ul className="menu">
                <li><Link to='/#clients' className={`${location.pathname}${location.hash}` === '/#clients' ? "active" : ""}>clients</Link></li>
                <li><Link to='/#work' className={`${location.pathname}${location.hash}` === '/#work' ? "active" : ""}>work</Link></li>
                <li><Link to='/#connect' className={`${location.pathname}${location.hash}` === '/#connect' ? "active" : ""}>connect</Link></li>
            </ul>
        </nav>
     )
}
 
export default Navbar;