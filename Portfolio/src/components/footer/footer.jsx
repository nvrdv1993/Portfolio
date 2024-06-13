import React from 'react';
import './footer.scss';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer" id="contact">
            <div className="footer-icons">
                <a href="mailto:votre@email.com" className="footer-icon">
                    <i className="fas fa-envelope"></i>
                </a>
                <a href="https://www.linkedin.com/in/nelson-do-vale-0209aba2/" className="footer-icon" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/nvrdv1993" className="footer-icon" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
            </div>
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Nelson Do Vale - Tous droits réservés.</p>
            </div>
            <a href="#" className="back-to-top" onClick={scrollToTop}>
                <i className="fas fa-arrow-up"></i>
            </a>
        </footer>
    );
}

export default Footer;
