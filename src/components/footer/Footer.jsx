import React from 'react';
import './footer.css';
const Footer = () => {
    return (
        <footer className="footer">
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

                <div className="footer__social">
                    <a href="https://www.instagram.com/thinh.npt/" className="footer__social-link" targer="_blank"><i class="uil uil-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/thinh-nguyen-21ba67284/" className="footer__social-link" targer="_blank"><i class="uil uil-linkedin-alt"></i></a>
                    <a href="https://github.com/kemchuoihot" className="footer__social-link" targer="_blank"><i class="uil uil-github-alt"></i></a>
                </div>
                <span className="footer__copy">&#169; Kindyy. All rights reserved</span>
            </div>
        </footer>
    );
};

export default Footer;