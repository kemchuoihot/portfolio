import React from 'react';
import './services.css';

const Services = () => {
    return (
        <section className="section services" id='services'>
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">
                What I am looking for
            </span>
            <div className="services__container container grid">
                <div className="services__content">
                    <div className="">
                        <i className="uil uil services-icon"></i>
                        <h3 className="services__title">...</h3>
                    </div>
                    <span className="services__button">View more
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className="services__modal">
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title"></h3>
                            <p className="services__modal-description">blablablaablabalbaablabalbalbalbalbabalbaabl</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;