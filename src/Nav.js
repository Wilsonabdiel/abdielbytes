import React from 'react';
import './Nav.css';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isMenuOpen: false };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }

    render() {
        return (
            <nav id="navbar" className={this.state.isMenuOpen ? 'bg-active' : ''}>
                <div className="nav-wrapper">
                    <p className="brand">Ja<strong>W\iL</strong></p>
                    <a
                        className={`menu-button ${this.state.isMenuOpen ? 'active' : ''}`}
                        onClick={this.toggleMenu}>
                        <span />
                    </a>
                </div>
            </nav>
        );
    }
}

export default Nav;
