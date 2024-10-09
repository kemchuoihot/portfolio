import React, {useState,useEffect} from 'react';
import './qualification.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Qualification = () => {
    const [toggleState,setToggleState] = useState(1);
    const toggleTab = (index) =>{
        setToggleState(index);
    }
    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 100,
        });
        // Refresh AOS on component mount
        AOS.refresh();
    }, []);
    return (
        <section className="section qualification" id='qualification' data-aos="fade-up">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div 
                        className={toggleState === 1 
                        ? "qualification__button button--flex qualification__active" 
                        : "qualification__button button--flex"}
                        onClick={() => setToggleState(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>Education
                    </div>
                    <div className={toggleState === 2 
                        ? "qualification__button button--flex qualification__active" 
                        : "qualification__button button--flex"}
                        onClick={() => setToggleState(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                    </div>
                </div>

                <div className="qualification__section">
                    <div 
                        className={toggleState === 1
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"
                    }>
                        <div className="qualification__data">
                            <div className="">
                                <h3 className="qualification__title">Ton Duc Thang University</h3>
                                <span className="qualification__subtitle">Software Engineering</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>
                            <div className="">
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>
                            <div className="">
                                <h3 className="qualification__title">Aptis ESOL</h3>
                                <span className="qualification__subtitle">170/200</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i> Dec 2022
                                </div>
                            </div>
                           
                        </div>
                    </div>

                    <div
                    className={toggleState === 2
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"
                    }>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>
                            <div className="">
                                <h3 className="qualification__title">MindX</h3>
                                <span className="qualification__subtitle"> Education Mentor</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i> June 2021 - Present
                                </div>
                            </div>
                            
                        </div>
                        <div className="qualification__data">
                            <div className="">
                                <h3 className="qualification__title">...</h3>
                                <span className="qualification__subtitle"> ...</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>
                            <div className="">
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;