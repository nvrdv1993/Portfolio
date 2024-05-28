import React from 'react';
import './background.scss'; // Importation du fichier SCSS pour appliquer les styles

const Background = () => {
  // Génération dynamique des spans en fonction du nombre spécifié dans le SCSS
  const spans = Array.from({ length: 49 }, (_, index) => (
    <span key={index}></span>
  ));

  return (
    <div className="background">
      {spans}
    </div>
  );
};

export default Background;
