import React from 'react';
import './projects.css';
import Projectgrp from './Projectgrp';


const Projects = () => (
    <section id="projects">
        <div className="projects-container">
            <div className="heading">
                <h2 className="title">My Work So Far</h2>
                <p className="separator" aria-hidden="true" /> {/* Add aria-hidden for non-visual separator */}
                <p className="subtitle"> Here is a list of most of the projects I have been working on lately.</p>
            </div>
            {/* {projects.map(project => (
                <Project key={project.id} {...project} />
      ))} */}
        </div>
        <Projectgrp />
    </section>
);


export default Projects;
