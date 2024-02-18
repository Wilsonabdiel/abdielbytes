import React from 'react';
import './static/About.css';
import AuthorAbdiel from '../public/images/AuthorAbdiel.jpg';

const About = () => (
    <section id="about" style={{ 
        backgroundImage: `url(${AuthorAbdiel})`, 
        backgroundPosition: 'top right', 
        backgroundRepeat: 'no-repeat' 
    }}>
        <div className="wrapper">

            <article>
                {/* <header>
                    <h2>About Me</h2>
                </header> */}

                <div className="title">
                    <h3>Who is this guy?</h3>
                    <p className="separator" />

                    <div className="desc full">
                        <h4 className="subtitle">Hi Humans, I'm Abdiel. </h4>
                        <p>A web developer and a writer based south of the milky way.</p>
                        <p>
                            I enjoy a few things, problem solving, creating well performing, secure, scallable and visually appealing applications
                           </p>
                           <p>
                            My passion for learning is insatiable. I thrive on acquiring new
                            knowledge and skills. </p>
                            <p>
                                And oh writing! Writing has always held a
                            special place in my heart, it is a hobby
                            I have enjoyed for a very long time now. I am not just an engineer
                            I am also a poet, expressing my thoughts through the rhythmn of words. </p>
                            <p>
                            Also, I love food, in a healthy way of course.
                            I enjoy
                            both the culinary art and its cultural significance!

                        </p>
                        <p><strong>That's a little about me.</strong></p>
                    </div>
                </div>

                <div className="title">
                    <h3>What does he do?</h3>
                    <p className="separator" /></div>
                <div className="desc">
                    <h4 className="subtitle">I am a <a href="#projects" >programmer</a>.</h4>
                   
                    <p>I work with PHP,
                        either standalone or with its frameworks
                        like laravel and symphony. I also work with
                        Python and its frameworks Django and Flask. I have built several projects in the forementioned languages. Some of these projects came about during my effort to gain basic knowledge. 
                     </p>


                </div>


                <div className="desc">
                    <h3 className="subtitle">Also a <a href="writerprofile"> writer.</a> </h3>
                    <p>I am addicted to creativity. When it comes to the realm words, 
                        I tell stories and convey emotions 
                        as best as I can using language.
                        </p>
                        <p>
                       Poetry gives me a safe space to explore my imaginations
                       </p>
                       <p>
                        When not trapped in the world of coding, or that of writing, I spend my time playing video games, who does not enjoy the adventures and quests the offer.
                        </p> 
                       
                </div>
                <div className="desc">
                <p>That is enough about me. Do reach out so I learn about you too. 
                <a href="https://twitter.com/abdielbytes"> <small>Twiiter </small> </a> 
                OR use the <a href='#contact'><small>contact form</small></a>
                </p>
                    
                     <p>See ya!</p> 
               
                </div>
            </article>
        </div>
    </section>
     );

export default About;
