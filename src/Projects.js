import React from 'react';

const Project = ({ title, img, tech, link, repo, children }) => {
    return ( 
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
                        <i key={t} className={getIconClass(t)} />
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
}

const Projects = ({ projects }) => (
    <section id="projects">
        <div className="projects-container">
            <div className="heading">
                <h2 className="title">My Work So Far</h2>
                <p className="separator" aria-hidden="true" /> {/* Add aria-hidden for non-visual separator */}
                <p className="subtitle">
                    Here's a list of <u>most</u> of the projects I've been working on lately. All of these were built during my coding camp adventure on {/* ... */}
                </p>
            </div>
            {projects.map(project => (
                <Project key={project.id} {...project} />
      ))}
        </div>
    </section>
);

 
export default Projects;