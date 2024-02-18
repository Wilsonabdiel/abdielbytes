import React from 'react';
import SocialLinks from './SocialLinks';
import './static/Footer.css';

const Footer = () => (
    <footer>
        <div className="wrapper">
                  <p className="copyright">Copyright &copy; {new Date().getFullYear()} Abdiel John Wilson.</p>
            <SocialLinks />
        </div>
    </footer>
    );


export default Footer;
