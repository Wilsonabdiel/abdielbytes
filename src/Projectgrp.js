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
                <div className="group">
                    <li>Current Focus</li>
                    <p className="separator" aria-hidden="true" />
                    <div className="grp flex">
                        <div className="proj">
                            <Project title="Assigner" img="..." link="..." />
                        </div>
                        <div className="proj">
                            <Project title="PyBlog" img="..." link="..." />
                        </div>
                    </div>
                </div>
                <div className="group">
                    <li>Django Ecosystem</li>
                    <p className="separator" aria-hidden="true" />
                    {/* <div className="grp flex">
                        <div className="proj">
                            <Project title="Assigner" img="..." link="..." />
                        </div>
                        <div className="proj">
                            <Project title="PyBlog" img="..." link="..." />
                        </div>
                    </div> */}
                </div>
                <div className="group">
                    <li> Laravel Ecosystem </li>
                    <p className="separator" aria-hidden="true" />
                    {/* <div className="grp flex">
                        <div className="proj">
                            <Project title="Assigner" img="..." link="..." />
                        </div>
                        <div className="proj">
                            <Project title="PyBlog" img="..." link="..." />
                        </div>
                    </div> */}
                </div>

                <div className="group">
                    <li>Web Apps & Online Tools</li>
                    <p className="separator" aria-hidden="true" />
                    {/* <div className="grp flex">
                        <div className="proj">
                            <Project title="Assigner" img="..." link="..." />
                        </div>
                        <div className="proj">
                            <Project title="PyBlog" img="..." link="..." />
                        </div>
                    </div> */}
                </div>
                <li>Games</li>
                <p className="separator" aria-hidden="true" />

                <div className="group">
                    <li>CLI Programs</li>
                    <p className="separator" aria-hidden="true" />
                    {/* <div className="grp flex">
                        <div className="proj">
                            <Project title="Assigner" img="..." link="..." />
                        </div>
                        <div className="proj">
                            <Project title="PyBlog" img="..." link="..." />
                        </div>
                    </div> */}
                </div>


            </ul>
        </div>
    </div>

  );

export default Projectgrp;

