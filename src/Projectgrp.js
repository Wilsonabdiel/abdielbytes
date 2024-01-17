import React from 'react';

const Project = ({ title, img, link }) => (


    <div className="project">
        <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
            <figure>
                <img className="project-image" src={img} alt={`Screenshot of ${title}`} />
                <figcaption>{title}</figcaption>
            </figure>
        </a>
        <div className="project-details">
            <div className="project-tile" />
        </div>
    </div>

   );


const Projectgrp = () => (

    <div className="projects-wrapper">
        <div className="project-categ">
            <ul className="project-list flex">

                <li>Current Focus</li>
                <p className="separator" aria-hidden="true" />
                <div className="grp flex">
                    <Project title="Assigner" img="..." link="..." />
                    <Project title="PyBlog" img="..." link="..." />

                </div>
                <li> Django Ecosystem </li>
                <p className="separator" aria-hidden="true" />

                <li> Laravel Ecosystem </li>
                <p className="separator" aria-hidden="true" />

                <li>Games</li>
                <p className="separator" aria-hidden="true" />

                <li>Web Apps & Online Tools</li>
                <p className="separator" aria-hidden="true" />

                <li>CLI Programs</li>
                <p className="separator" aria-hidden="true" />

            </ul>
        </div>
    </div>

  );

export default Projectgrp;

