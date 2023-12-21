import React from 'react';
import './menu.css';
import SocialLinks from './SocialLinks';
// import './Nav.css';

const Menu = ({ isMenuOpen, onToggleMenu }) =>
    // ... removed _defineProperty function for clarity
     (
         <div className={`menu-container ${isMenuOpen}`}>
             <div className="overlay" />
             <div className="menu-items">
                 <ul>
                     <li>
                         <a href="#welcome-section" onClick={onToggleMenu}>HOME</a>
                     </li>
                     <li>
                         <a href="#welcome-section" onClick={onToggleMenu}>ABOUT</a>
                     </li>
                     <li>
                         <a href="#welcome-section" onClick={onToggleMenu}>BLOG</a>
                     </li>
                     <li>
                         <a href="#welcome-section" onClick={onToggleMenu}>CONTACT</a>
                     </li>

                     <SocialLinks />
                 </ul>
             </div>
         </div>
    );

export default Menu;
