import React, { useState } from 'react';
import './header.scss';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleMenuClick() {
    setIsModalOpen(prevState => !prevState);
    if (!isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  return (
    <header>
      <div className="logo">NDV</div>
      <div className="nav-container desktop">
        <nav>
          <a className="item" href="#">A propos</a>
          <a className="item" href="#">Projets</a>
          <a className="item" href="#">Compétences</a>
          <a className="item" href="#">Contact</a>
        </nav>
        <div className="icon-container" onClick={handleMenuClick}>
          {isModalOpen ? (
            <i class="fa-solid fa-xmark fa-beat-fade fa-lg"></i>
          ) : (
            <div id="menu_icon">☰</div>
          )}
        </div>
      </div>
      {isModalOpen && (
        <div className="modal" onClick={handleMenuClick}>
          <nav>
            <a className="item" href="#">A propos</a>
            <a className="item" href="#">Projets</a>
            <a className="item" href="#">Compétences</a>
            <a className="item" href="#">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
