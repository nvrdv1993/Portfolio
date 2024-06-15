import React, { useState, useEffect } from 'react';
import './aboutMe.scss';

const AboutMe = () => {
  const words = ['DEVELOPPEUR WEB!', 'CURIEUX!', 'MOTIVE!', 'PASSIONNE!'];
  const [displayedWordIndex, setDisplayedWordIndex] = useState(0);
  const [displayedLetters, setDisplayedLetters] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[displayedWordIndex];

    const displayLettersInterval = setInterval(() => {
      if (!isDeleting) {
        // Adding letters one by one
        setDisplayedLetters((prevLetters) => {
          const nextLetter = word[prevLetters.length];
          if (nextLetter) {
            return prevLetters + nextLetter;
          } else {
            setIsDeleting(true);
            return prevLetters;
          }
        });
      } else {
        // Removing letters one by one
        setDisplayedLetters((prevLetters) => {
          if (prevLetters.length > 0) {
            return prevLetters.slice(0, -1);
          } else {
            setIsDeleting(false);
            setDisplayedWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            return '';
          }
        });
      }
    }, 65); // Typing and deleting speed (in milliseconds)

    return () => clearInterval(displayLettersInterval);
  }, [displayedWordIndex, displayedLetters, isDeleting, words]);

  return (
    <div className="presentation-section" id="a propos">
      <h1 className="typewriter-text">
        Je suis,<br /> {displayedLetters}
      </h1>
      <p className="fade-in-up-1">
        Bienvenue sur mon portfolio ! Je suis ravi de vous accueillir ici pour découvrir mon parcours et mes réalisations.
      </p>
      <p className="fade-in-up-2">
        Durant une période de 9 mois, j'ai eu la chance d'être formé par OpenClassrooms, où j'ai plongé dans l'univers du développement web. Au cours de cette formation, j'ai travaillé sur une multitude de projets pratiques, allant du codage à l'optimisation du référencement, en passant par la planification de projet.
      </p>
      <p className="fade-in-up-3">
        Cette expérience m'a permis d'explorer divers aspects du développement, mais aussi de maîtriser des outils et technologies variés, tels que React, Sass, Node.js, Redux, et bien d'autres. Mon objectif a toujours été d'optimiser au mieux les interfaces utilisateurs, en les rendant à la fois intuitives et esthétiques.
      </p>
      <p className="fade-in-up-4">
        Je vous invite à parcourir mes différents projets présentés ici, ainsi que mon profil GitHub pour découvrir davantage mon travail. Si vous êtes intéressé par une collaboration ou si vous avez des questions, n'hésitez pas à me contacter. Je serai ravi d'échanger avec vous !
      </p>
    </div>
  );
};

export default AboutMe;
