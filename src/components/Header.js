import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <h1>ADNAN KS</h1>
            <p>Security Researcher & Penetration Tester</p>
            <a href="/resume.pdf" download className="download-resume">
                <i className="fas fa-file-download"></i> Download Resume
            </a>
        </header>
    );
};

export default Header;
