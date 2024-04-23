import React, { useEffect } from 'react';
import { TweenLite, Circ } from 'gsap'; // Import TweenLite and Circ from GSAP
import './static/port.css';

const Porfolio = () => {
  
  return (
    <section className='header'>
      <div className='small'>

        <div className='title'>Portfolio</div>
        <div className='parent'>
          <div className='text'>
          <p>
            I am a backend engineer with 2+ years of experience learning and working within the intricacies of the backend. I have designed, developed and maintained roboust and scalable web applications. I love being part of teams that want to chnage the world.
          </p>
        </div>
        <div className='project-carousel'>
        <p>Project Carousel Content Here</p>
        </div>
      </div>

    </div>
 
    </section>
  );
};

export default Porfolio;
