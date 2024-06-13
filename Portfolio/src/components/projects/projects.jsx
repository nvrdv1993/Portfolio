import React from 'react';
import './projects.scss';
import NinaCarducciImage from '../../assets/Nina Carducci.webp';
import ArgentBank from '../../assets/argent-bank.jpeg';
import Events from '../../assets/724Events.png';
import Qwenta from '../../assets/banner-qwenta.png';

const Projects = () => {
  return (
    <div className="projects-container"id ="projets">
      <h2>Projets</h2>
      <div className="projects-grid">
        <div className="project-card">
          <img src={NinaCarducciImage} alt="Project 1" />
          <h3>Nina Carducci</h3>
          <div className="project-card-content">
            <p>Nina Carducci est le site web d'une photographe professionnelle spécialisée dans les portraits et la photographie événementielle. Le site a pour but de présenter le portfolio de la photographe et de mettre en valeur ses réalisations.</p>
            <div className="project-links">
              <a href="https://nvrdv1993.github.io/NinaCarducci/" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-link"></i>
              </a>
              <a href="https://github.com/nvrdv1993/NinaCarducci" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </div>
            <div className="project-badges">
              <span className="badge">Optimisation web</span>
              <span className="badge">SEO</span>
              <span className="badge">Référencement local</span>
              <span className="badge">Rich Snippet</span>
              <span className="badge">Wave</span>
              <span className="badge">Lighthouse</span>
              <span className="badge">Accessibilité</span>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={ArgentBank} alt="Project 2" />
          <h3>Argent Bank</h3>
          <div className="project-card-content">
            <p>En tant que développeur front-end chez Argent Bank, ma mission principale était de créer un tableau de bord utilisateur avec un système d'authentification en utilisant React et Redux. Cette tâche impliquait la migration d'un site web existant en HTML/CSS vers cette nouvelle plateforme.</p>
            <div className="project-links">
              <a href="" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-link"></i>
              </a>
              <a href="https://github.com/nvrdv1993/ArgentBank-website" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </div>
            <div className="project-badges">
              <span className="badge">React</span>
              <span className="badge">Redux</span>
              <span className="badge">Green code</span>
              <span className="badge">JWT</span>
              <span className="badge">Swagger</span>
              <span className="badge">MongoDB</span>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={Events} alt="Project 3" />
          <h3>724Events</h3>
          <div className="project-card-content">
            <p>724events, une agence événementielle, avait lancé une refonte cruciale de son site vitrine. Après la validation du design, un développeur freelance a été recruté pour l'intégration, mais il a dû quitter le projet en cours. J'ai relevé le défi de résoudre les problèmes techniques et d'optimiser le site pour répondre pleinement aux besoins de l'agence.</p>
            <div className="project-links">
              <a href="" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-link"></i>
              </a>
              <a href="https://github.com/nvrdv1993/724Events" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </div>
            <div className="project-badges">
              <span className="badge">Débogage</span>
              <span className="badge">Optimisation</span>
              <span className="badge">Tests Unitaires</span>
              <span className="badge">React Dev Tools</span>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={Qwenta} alt="Project 4" />
          <h3>Qwenta</h3>
          <div className="project-card-content">
            <p>Au sein de l'agence Webgencia, j'ai pris en charge la préparation et la planification d'un projet de développement particulier : la création du "Menu Maker" pour l'entreprise Qwenta. Le "Menu Maker" est un outil novateur dédié aux restaurateurs, simplifiant la conception et la mise en page de leurs menus.</p>
          </div>
          <div className="project-badges">
              <span className="badge">Méthode agile</span>
              <span className="badge">Scrum</span>
              <span className="badge">Kanban</span>
              <span className="badge">Notion</span>
              <span className="badge">Flipboard</span>
              <span className="badge">Outil de veille</span>
              <span className="badge">Planification de projet</span>
              <span className="badge">Spécifications techniques</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
