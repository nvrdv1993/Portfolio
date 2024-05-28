import React from 'react';
import Background from './components/background/background';
import Header from './components/header/header';
import AboutMe from './components/aboutMe/aboutMe';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import Footer from './components/footer/footer';
import './App.css';



function App() {
  return (
    <div className="App">
      <Background /> {/* Utilise le composant Background pour le fond */}
      <Header /> {/* Utilise le composant Header */}
      <AboutMe /> {/* Utilise le composant aboutMe */}
      <Projects /> {/* Utilise le composant aboutMe */}
      <Skills /> {/* Utilise le composant aboutMe */}
      <Footer /> {/* Utilise le composant aboutMe */}
    </div>
  );
}

export default App;
