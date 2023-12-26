import React from 'react';
import './SocialLinks.css';

const SocialLinks = () => (


    <div className="socialsdiv">

        <div className="socials">
            <ul>
                <li>
                    <a href="#welcome-section">
                        <i className="fa fa-github" aria-hidden="true" />
                    </a>
                </li>
                <li>
                    <a href="#about">
                        <i className="fa fa-linkedin" aria-hidden="true" />
                    </a>
                </li>
                <li>
                    <a href="#projects">
                        <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                </li>
                <li>
                    <a href="#contact">
                        <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                </li>
                <li>
                    <a href="#contact">
                        <i className="fa fa-instagram" aria-hidden="true" />
                    </a>
                </li>

            </ul>
        </div>
    </div>
  );

export default SocialLinks;
