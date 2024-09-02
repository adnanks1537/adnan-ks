import React from 'react';
import './ProgrammingLanguages.css';

const ProgrammingLanguages = () => {
    return (
        <section className="programming-languages">
            <h2>Programming Languages & Tools</h2>
            <div className="icons-container">
                <div className="icon-box">
                    <i className="fab fa-python"></i>
                    <span>Python</span>
                </div>
                <div className="icon-box">
                    <i className="fab fa-react"></i>
                    <span>React</span>
                </div>
                <div className="icon-box">
                    <i className="fas fa-database"></i>
                    <span>MongoDB</span>
                </div>
                <div className="icon-box">
                    <i className="fab fa-html5"></i>
                    <span>HTML5</span>
                </div>
                <div className="icon-box">
                    <i className="fab fa-css3-alt"></i>
                    <span>CSS3</span>
                </div>
                <div className="icon-box">
                    <i className="fab fa-js-square"></i>
                    <span>JavaScript</span>
                </div>
                <div className="icon-box">
                    <i className="fas fa-database"></i>
                    <span>MySQL</span>
                </div>
                <div className="icon-box">
                    <i className="fas fa-terminal"></i>
                    <span>Bash</span>
                </div>
                <div className="icon-box">
                    <i className="fab fa-windows"></i>
                    <span>PowerShell</span>
                </div>
                <div className="icon-box">
                    <i className="fas fa-code"></i>
                    <span>C</span>
                </div>
            </div>
        </section>
    );
};

export default ProgrammingLanguages;
