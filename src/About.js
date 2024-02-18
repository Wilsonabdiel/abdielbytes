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
                    <h4 className="subtitle">I am a <a href='#portfolio'>programmer</a>.</h4>
                   
                    <p>I work with PHP,
                        either standalone or with its frameworks
                        like laravel and symphony. I also work with
                        Python and its frameworks Django and Flask. I have built several projects in the forementioned languages
                     </p>


                </div>


                <div className="desc">
                    <h3 className="subtitle">Also a writer.</h3>
                    <p>I am a passionate writer with a penchant for creativity.
                        When I am not delving into the realm of words and stories,
                        I harness my imagination through the art of poetry,
                        enabling me to convey my thoughts in distinctive and captivating ways.
                        Beyond the written word, I also find solace and excitement in the virtual
                        landscapes of video games,
                        where I embark on thrilling adventures and put my strategic thinking to the test.</p> 
                </div>
            </article>
        </div>
    </section>
     );

export default About;
