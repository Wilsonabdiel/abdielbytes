import React from 'react';

const SocialLinks = ({ socialLinks }) => (
    <div className="social">
        {socialLinks.map(link => (
            <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                title={link.title}>
                <i className={`fab fa-${link.icon}`} aria-hidden="true" />
                {link.title}
                const SocialLinks = ({ socialLinks }) = (
                <div className="social">
                    {socialLinks.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={link.title}>
                            <i className={`fab fa-${link.icon}`} aria-hidden="true" />
                            {link.title}
                        </a>
    ))}
                </div>
                );

            </a>
    ))}
    </div>
);
export default SocialLinks;