import React from 'react';
import './projects.scss'; // Assurez-vous d'avoir le bon chemin vers votre fichier de style
import NinaCarducciImage from '../../assets/Nina Carducci.webp';
import ArgentBank from '../../assets/argent-bank.jpeg';
import Events from '../../assets/724Events.png';
import Qwenta from '../../assets/banner-qwenta.png';


const Projects = () => {
    return (
        <main>
            <div className="card-container">
                <div className="card">
                <img src={NinaCarducciImage} alt="Description de l'image du projet Nina Carducci" />
                    <div className="card-content">
                        <h2>
                         Nina Carducci
                        </h2>
                        <p>
                        Nina Carducci est le site web d'une photographe professionnelle spécialisée dans les portraits et la photographie événementielle. Le site a pour but de présenter le portfolio de la photographe et de mettre en valeur ses réalisations.
                        </p>
                        <a href="#" className="button">
                            Find out more 
                            <span className="material-symbols-outlined">
                                arrow_right_alt
                            </span>
                        </a>
                    </div>
                </div>

                <div className="card">
                <img src={ArgentBank} alt="Description de l'image du projet Argent Bank" />
                    <div className="card-content">
                        <h2>
                            Argent Bank
                        </h2>
                        <p>
                        En tant que développeur front-end chez Argent Bank, ma mission principale était de créer un tableau de bord utilisateur avec un système d'authentification en utilisant React et Redux. Cette tâche impliquait la migration d'un site web existant en HTML/CSS vers cette nouvelle plateforme.
                        </p>
                        <a href="#" className="button">
                            Find out more 
                            <span className="material-symbols-outlined">
                                arrow_right_alt
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="card-container">
                <div className="card">
                <img src={Events} alt="Description de l'image du projet 724Events" />
                    <div className="card-content">
                        <h2>
                            724Events
                        </h2>
                        <p>
                        724events, une agence événementielle, avait lancé une refonte cruciale de son site vitrine. Après la validation du design, un développeur freelance a été recruté pour l'intégration, mais il a dû quitter le projet en cours. J'ai relevé le défi de résoudre les problèmes techniques et d'optimiser le site pour répondre pleinement aux besoins de l'agence.
                        </p>
                        <a href="#" className="button">
                            Find out more 
                            <span className="material-symbols-outlined">
                                arrow_right_alt
                            </span>
                        </a>
                    </div>
                </div>

                <div className="card">
                <img src={Qwenta} alt="Description de l'image du projet Qwenta" />
                    <div className="card-content">
                        <h2>
                            Qwenta
                        </h2>
                        <p>
                            Au sein de l'agence Webgencia, j'ai pris en charge la préparation et la planification d'un projet de développement particulier : la création du "Menu Maker" pour l'entreprise Qwenta. Le "Menu Maker" est un outil novateur dédié aux restaurateurs, simplifiant la conception et la mise en page de leurs menus.
                            </p>
                        <a href="#" className="button">
                            Find out more 
                            <span className="material-symbols-outlined">
                                arrow_right_alt
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Projects;
