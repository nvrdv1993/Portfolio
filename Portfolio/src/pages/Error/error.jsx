import React from 'react';
import { Link } from 'react-router-dom';
import './error.scss'; // Assure-toi d'importer ton fichier Sass

const NotFoundPage = () => {
  return (
    <div className="error-container">
      <div className="error-message">
        <h1 className="error-heading">404</h1>
        <p className="error-text">Oops! La page que vous recherchez est introuvable.</p>
        <Link to="/" className="error-link">Retourner à la page d'accueil</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
