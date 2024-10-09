import React, { useEffect } from 'react';
import './footer.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 3000,
            delay: 100,
        });
        // Refresh AOS on component mount
        AOS.refresh();
    }, []);

    return (
        <footer className="footer" data-aos="zoom-in">
            <div className="footer__container container">
                <h1 className="footer__title">Kindy</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#project" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#testimonals" className="footer__link">Testimonals</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;