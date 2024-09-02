import React from 'react';
import './Experience.css';

const Experience = () => {
    return (
        <section className="experience">
            <h2>Professional Experience</h2>
            <ul>
                <li><strong>Freelance | 2022- Present:</strong> Identified and reported various vulnerabilities across multiple clients.</li>
                <li><strong>TNEMIS:</strong> Identified vulnerabilities including IDOR and Authentication Bypass.</li>
                <li><strong>Keltron Pvt Ltd.:</strong> Identified a sensitive information disclosure vulnerability.</li>
                {/* Add more items as needed */}
            </ul>
        </section>
    );
};

export default Experience;
