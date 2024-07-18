import React,{useState, useEffect } from "react";
import "./header.css"
const Header = () => {


    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('.header');
            if (window.scrollY >= 80) {
                header.classList.add('scroll-header');
            } else {
                header.classList.remove('scroll-header');
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const [toggle,setToggle] = useState(false)
    const [activeNav,setActiveNav] = useState('#home')
    return(
        <div className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Kindy</a>

                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" 
                            ? "nav__link active-link"
                            : "nav__link"
                        }>
                                <i className="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" 
                            ? "nav__link active-link"
                            : "nav__link"
                        }>
                                <i className="uil uil-user nav__icon"></i>About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills"onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" 
                            ? "nav__link active-link"
                            : "nav__link"
                        }>
                                <i className="uil uil-file-alt nav__icon"></i>Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#project" onClick={() => setActiveNav("#project")} className={activeNav === "#project" 
                            ? "nav__link active-link"
                            : "nav__link"
                        }>
                                <i className="uil uil-briefcase-alt nav__icon"></i>Project
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#qualification" onClick={() => setActiveNav("#qualification")} className={activeNav === "#qualification" 
                            ? "nav__link active-link"
                            : "nav__link"
                        }>
                                <i className="uil uil-scenery nav__icon"></i>Qualification
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" 
                            ? "nav__link active-link"
                            : "nav__link"
                        }>
                                <i className="uil uil-message nav__icon"></i>Contact
                            </a>
                        </li>

                    </ul>
                    <i class="uil uil-times nav__close" onClick={() => setToggle(!toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </div>
    )
}

export default Header