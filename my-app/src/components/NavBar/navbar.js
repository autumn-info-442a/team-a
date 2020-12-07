import React, { Component } from 'react';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';
import './navbar.css'

class NavBar extends Component {
    render() {
        return (
            <header>
                <nav className="row-navbar">
                    <div className="navbar-logo">
                        <Link to={ROUTES.LANDING} id="logo">ACCESSITECH</Link>
                    </div>
                    <ul className="navbar-links">
                        <li><a href="index.html">
                            <Link to={ROUTES.LANDING} id="landing">About Us</Link>
                        </a></li>
                        <li><a href="">
                            <Link to={ROUTES.BROWSE_ORGS} id="browseOrgs">Browse organizations</Link>
                        </a></li>
                        <li><a href="/">
                            <Link to={ROUTES.SUBMIT_ORG} id="submitOrg">Submit a goal</Link>
                        </a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default NavBar;