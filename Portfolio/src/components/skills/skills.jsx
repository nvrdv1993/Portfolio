import React from 'react';
import './skills.scss';

const Skills = () => {
    return (
        <div className="skills-container animated" id="compétences">
            <h2>Compétences</h2>
            <ul className="skills-list">
                <li className="skill-item">
                    <div className="skill-icon-container">
                        <i className="fab fa-react skill-icon"></i>
                        <span className="skill-text">React</span>
                    </div>
                </li>
                <li className="skill-item">
                    <div className="skill-icon-container">
                        <i className="fab fa-sass skill-icon"></i>
                        <span className="skill-text">Sass</span>
                    </div>
                </li>
                <li className="skill-item">
                    <div className="skill-icon-container">
                        <i className="fab fa-js skill-icon"></i>
                        <span className="skill-text">JavaScript</span>
                    </div>
                </li>
                <li className="skill-item">
                    <div className="skill-icon-container">
                        <i className="fab fa-node-js skill-icon"></i>
                        <span className="skill-text">Node.js</span>
                    </div>
                </li>
                <li className="skill-item">
                    <div className="skill-icon-container">
                        <i className="fab fa-react skill-icon"></i>
                        <span className="skill-text">Redux</span>
                    </div>
                </li>
                <li className="skill-item">
                    <div className="skill-icon-container">
                        <i className="fab fa-github skill-icon"></i>
                        <span className="skill-text">GitHub</span>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Skills;
