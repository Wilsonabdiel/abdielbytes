import React from 'react';

const Project = ({ title, img, tech, link, repo, children }) => (
    <div className="project">
        <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
            <figure>
                <img className="project-image" src={img} alt={`Screenshot of ${title}`} />
                <figcaption>{title}</figcaption>
            </figure>
        </a>
        <div className="project-details">
            <div className="project-tile">
                <p className="icons">
                    {tech.split(' ').map(t => (
                        <i key={t} />
        ))}
                </p>
            </div>
            {children}
            <div className="buttons">
                <a href={repo} target="_blank" rel="noopener noreferrer">
                    View source <i className="fas fa-external-link-alt" />
                </a>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    Try it Live <i className="fas fa-external-link-alt" />
                </a>
            </div>
        </div>
    </div>
   );
const Projectgrp = () => (
    <div className="projects-wrapper">
        <Project
            title="Anonymous Message Board."
            img="https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/AnonMsgBoard.jpg"
            tech="js css react node"
            link="https://yagoestevez-anon-msg-board.glitch.me/"
            repo="https://www.freecodecamp.org/learn/2022/responsive-web-design/build-a-survey-form-project/build-a-survey-form">
            <small>Built using Node, Express, MongoDB, CSS + Bulma, React.js, and React Router.</small>
            <p>This is a full-stack website that I made which lets the
                users read and post anonymous messages and replies.</p>
        </Project>

        <Project
            title="Stock Price Checker."
            img="https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/StockPriceChecker.jpg"
            tech="js node css"
            link="https://yagoestevez-stock-price-checker.glitch.me/"
            repo="https://github.com/yagoestevez/fcc-stock-price-checker">
            <small>Built using Node, Express, MongoDB, JS + jQuery + Axios, CSS + Bootstrap, and Pug.</small>
            <p>Another full-stack website to check the current value of any requested stock in the market.</p>
        </Project>

        {/* Repeat the pattern for other projects */}
    </div>

     );

export default Projectgrp;
