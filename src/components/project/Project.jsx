import React, { useEffect } from "react";
import "./project.css";
import Film from "../../assets/film.png";
import POS from "../../assets/POS.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    // Refresh AOS on component mount
    AOS.refresh();
  }, []);
  return (
    <section className="project section" id="project" data-aos="zoom-in-up">
      <h2 className="section__title">Project</h2>
      <span className="section__subtitle">My recent projects</span>
      <div className="project__container container grid">
        <div className="project__card">
          <img className="project__img" src={POS} alt="" srcset="" />
          <h3 className="project__title">POS</h3>
          <div className="project__link">
            <a
              href="https://deploy-pos.vercel.app/login"
              className="project__button"
            >
              <i class="bx bx-link"></i> Demo{" "}
              <i className="project__button-icon bx bx-right-arrow-alt"></i>
            </a>
            <a
              href="https://github.com/kemchuoihot/POS"
              className="project__button"
            >
              <i class="bx bxl-github"></i>Github{" "}
              <i className="project__button-icon bx bx-right-arrow-alt"></i>
            </a>
          </div>
        </div>
        <div className="project__card">
          <img className="project__img" src={Film} alt="" srcset="" />
          <h3 className="project__title">Movie streaming</h3>
          <div className="project__link">
            <a
              href="https://movie-streaming-azure.vercel.app/"
              className="project__button"
            >
              <i class="bx bx-link"></i> Demo{" "}
              <i className="project__button-icon bx bx-right-arrow-alt"></i>
            </a>
            <a
              href="https://github.com/kemchuoihot/movie-streaming"
              className="project__button"
            >
              <i class="bx bxl-github"></i>Github{" "}
              <i className="project__button-icon bx bx-right-arrow-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
