import React from 'react';

const Contact = ({ contactData }) => (
    <section id="contact">
        <div className="container">
            <div className="heading-wrapper">
                <div className="heading">
                    <h2 className="title">Want to contact me?</h2>
                    <p className="separator" aria-hidden="true" /> {/* Add aria-hidden for non-visual separator */}
                    <p className="subtitle">
                        Please use the form below or send an email to
                        <a href="mailto:wilsonabdiel86@gmail.com" className="mail">
                            wilsonabdiel86{' '}
                            <i className="fas fa-at at" aria-hidden="true" />{' '}
                            gmail{' '}
                            <i className="fas fa-circle dot" aria-hidden="true" />{' '}
                            com
                        </a>
                        .
                    </p>
                    <SocialLinks />
                </div>
            </div>
            <form id="contact-form" onSubmit={handleSubmit}> {/* Add onSubmit handler */}
                {/* ... form fields */}
            </form>
        </div>
    </section>
);
 
export default Contact;