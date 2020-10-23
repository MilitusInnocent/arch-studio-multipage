import React from 'react';
import { Link } from 'react-router-dom';
import { PageLinks } from '../components';
import logo from '../images/archLogo.svg';


const Navbar = () => {

    return (
        <div className="navbar">
            <Link to="/">
                <img className="navbar__logo" src={logo} alt="Arch company logo" />
            </Link>
            <div className="navbar__links">
                <PageLinks />
            </div>

        </div>

    )
}

export default Navbar;