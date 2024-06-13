import React, { useState, useEffect } from 'react';
import './header.scss';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isModalOpen]);

  function handleMenuClick() {
    setIsModalOpen(prevState => !prevState);
  }

  function handleSmoothScroll(event, targetId) {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setIsModalOpen(false); // Fermer la modal après le clic
    }
  }

  function scrollToTop(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <header>
      <a href="#top" className="logo" onClick={scrollToTop}>NDV</a>
      <div className="nav-container desktop">
        <nav>
          <a className="item" href="#a propos" onClick={(e) => handleSmoothScroll(e, 'a propos')}>A propos</a>
          <a className="item" href="#projets" onClick={(e) => handleSmoothScroll(e, 'projets')}>Projets</a>
          <a className="item" href="#compétences" onClick={(e) => handleSmoothScroll(e, 'compétences')}>Compétences</a>
          <a className="item" href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>Contact</a>
        </nav>
        <div className="icon-container" onClick={handleMenuClick}>
          {isModalOpen ? (
            <i className="fa-solid fa-xmark fa-beat-fade fa-lg"></i>
          ) : (
            <div id="menu_icon">☰</div>
          )}
        </div>
      </div>
      {isModalOpen && (
        <div className="modal">
          <nav>
            <a className="item" href="#a propos" onClick={(e) => handleSmoothScroll(e, 'a propos')}>A propos</a>
            <a className="item" href="#projets" onClick={(e) => handleSmoothScroll(e, 'projets')}>Projets</a>
            <a className="item" href="#compétences" onClick={(e) => handleSmoothScroll(e, 'compétences')}>Compétences</a>
            <a className="item" href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
