import React, { Component } from 'react'

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

export default NavBarView;