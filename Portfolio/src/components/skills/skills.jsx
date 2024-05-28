import React from 'react';
import './skills.scss';

const Skills = () => {
    return (
        <div className="skills-container animated"> {/* Appliquer la classe "animated" */}
            <h2>Compétences</h2>
            <ul className="skills-list">
                <li className="skill-item"><i className="fab fa-react skill-icon"></i> React</li>
                <li className="skill-item"><i className="fab fa-sass skill-icon"></i> Sass</li>
                <li className="skill-item"><i className="fab fa-js skill-icon"></i> Next.js</li>
                <li className="skill-item"><i className="fab fa-node-js skill-icon"></i> Node.js</li>
                <li className="skill-item"><i className="fab fa-react skill-icon"></i> Redux</li>
                <li className="skill-item"><i className="fab fa-github skill-icon"></i> GitHub</li>
            </ul>
            <div className="additional-skills">
                <ul>
                    <li>▸ Référencement SEO</li>
                    <li>▸ Méthode agile</li>
                    <li>▸ Accessibilité</li>
                    <li>▸ Rigueur</li>
                    <li>▸ Autonomie</li>
                    <li>▸ Adaptabilité</li>
                    <li>▸ Curiosité</li>
                </ul>
            </div>
        </div>
    );
};

export default Skills;
