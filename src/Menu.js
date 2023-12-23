import React from 'react';
import './menu.css';
import SocialLinks from './SocialLinks';

class Menu extends React.Component {
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
            <div className={`menu-container ${this.state.isMenuOpen ? 'active' : ''}`}>
                <div className="overlay" />
                <div className="menu-items">
                    <ul>
                        <li>
                            <a href="#welcome-section" onClick={this.toggleMenu}>HOME</a>
                        </li>
                        <li>
                            <a href="#about" onClick={this.toggleMenu}>ABOUT</a>
                        </li>
                        <li>
                            <a href="#projects" onClick={this.toggleMenu}>PORTFOLIO</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={this.toggleMenu}>CONTACT</a>
                        </li>
                        <SocialLinks />
                    </ul>
                </div>
            </div>
        );
    }
}

export default Menu;
