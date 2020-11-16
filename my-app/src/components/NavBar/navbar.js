import React, { Component } from 'react';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './navbar.css'

class NavBar extends Component {
    render() {
        return (
            <header>
                <nav className="row-navbar">
                    <div className="navbar-logo">ACCESSITECH</div>
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

/*
class NavBarView extends Component {
    render() {
        return (
            <nav>
                <div className="navbar-logo">ACCESSITECH</div>
                <ul className="navbar-links">
                    <li><a href="/">About</a></li>
                    <li><a href="/">Browse organizations</a></li>
                    <li><a href="/">Submit a goal</a></li>
                </ul>
            </nav>
        )
    }
}


                <div>
                    <a href='index.html' aria-live='assertive'>
                        <Link to={ROUTES.LANDING}><img id='logo' src={logo} alt='Accessitech Logo' /></Link>
                    </a>
                </div>
*/

export default NavBar;