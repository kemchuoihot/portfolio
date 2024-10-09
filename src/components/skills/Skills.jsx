import React, {useEffect}from 'react';
import './skills.css';
import Frontend from './Frontend.jsx';
import Backend from './Backend';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Skills = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
        // Refresh AOS on component mount
        AOS.refresh();
    }, []);
    return (
        <section data-aos="fade-up" className="skills section" id='skills'>
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">
                My technical skills
            </span>
            <div className="skills__container container grid">
                <Frontend/>
                <Backend/>
            </div>
        </section>
    );
};

export default Skills;