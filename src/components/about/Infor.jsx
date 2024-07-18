import React from 'react';

const Infor = () => {
    return (
        <div className="about__infor grid">
            <div className="about__box">
                <i className="bx bx-award about-icon"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">0+</span>
            </div>
            <div className="about__box">
                <i className="bx bx-briefcase-alt about-icon"></i>
                <h3 className="about__title">Project</h3>
                <span className="about__subtitle">2</span>
            </div>
            <div className="about__box">
                <i className="bx bx-support about-icon"></i>
                <h3 className="about__title">Support</h3>
                <span className="about__subtitle">24/7</span>
            </div>
        </div>
    );
};

export default Infor;