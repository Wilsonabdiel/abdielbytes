import React from 'react';
import './static/port.css';

const Portfolio = () => {
  // Sample project data, replace with your actual project data
  const projects = [
    {
      name: 'Blog',
      imageUrl: 'https://raw.githubusercontent.com/Wilsonabdiel/blog/main/public/images/logo.svg',
      websiteUrl: 'hhttps://github.com/Wilsonabdiel/blog',
    },
    {
      name: 'AbdielBytes',
      imageUrl: 'https://raw.githubusercontent.com/Wilsonabdiel/abdielbytes/main/public/favicon.ico',
      websiteUrl: 'https://abdielbytes.netlify.app/',
    },
    {
      name: 'Project 3',
      imageUrl: 'https://via.placeholder.com/150',
      websiteUrl: 'https://www.example.com/project3',
    },
  ];

  return (
    <section className='header'>
      <div className='small'>
        <div className='title'>Portfolio</div>
        <div className='parent'>
          <div className='text'>
            <p>
              I am a backend engineer with 2+ years of experience learning and working within the intricacies of the backend. I have designed, developed, and maintained robust and scalable web applications. I love being part of teams that want to change the world.
            </p>
          </div>
          <div className='project-carousel'>
            {projects.map((project, index) => (
              <div className='project-box' key={index}>
                <a href={project.websiteUrl} target='_blank' rel='noopener noreferrer'>
                  <img src={project.imageUrl} alt={project.name} />
                  <div className='overlay'>
                    <p className='project-name'>{project.name}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
