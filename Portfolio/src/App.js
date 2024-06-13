import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Background from './components/background/background';
import Header from './components/header/header';
import AboutMe from './components/aboutMe/aboutMe';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import Footer from './components/footer/footer';
import NotFound from './pages/Error/error';
import './App.css';

function HomePage() {
  return (
    <div className="App">
      <Background />
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
