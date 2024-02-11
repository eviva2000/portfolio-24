import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";
const Canvas: React.FC = () => {
  return (
    <>
      <section>
        <div className="content">
          <div className="info">
            <h1>I am an enthusiastic </h1>
          </div>
          <Swiper
            effect="cards"
            grabCursor={true}
            speed={500}
            loop={true}
            mousewheel={{ invert: false }}
            modules={[EffectCards]}
          >
            <SwiperSlide>
              <h2>Frontend Developer</h2>
            </SwiperSlide>
            <SwiperSlide>
              <h2>Critical thinker</h2>
            </SwiperSlide>
            <SwiperSlide>
              <h2>Backend Explorer</h2>
            </SwiperSlide>
            <SwiperSlide>
              <h2>Mom of 2</h2>
            </SwiperSlide>

            <SwiperSlide>
              <h2>Design patterns learner</h2>
            </SwiperSlide>

            <SwiperSlide>
              <h2>Music student</h2>
            </SwiperSlide>
            <SwiperSlide>
              <h2>DevOps explorer</h2>
            </SwiperSlide>

            <SwiperSlide>
              <h2>Comunicator</h2>
            </SwiperSlide>
          </Swiper>
        </div>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>
      <div className="featured">
        <h1>Featured Projects</h1>
        <div className="featured-projects">
          <div className="featured-column">
            <a
              href="https://github.com/eviva2000/Sundae-project"
              className="project-wrapper"
            >
              <div className="project">
                <img className="p-image" src="/sundaes.png" alt="sundaes" />
                <div className="tech">
                  <p>
                    This project has beed created by TDD approch and manages the
                    sundae online orders. You can choose scoops and toppings and
                    the app will handle sub total and grand total of your order
                    using context API.
                  </p>
                  <div className="logo-wrapper">
                    <img src="/logo512.png" alt="React logo" />
                    <img src="/nodejs-icon.svg" alt="Nodejs logo" />
                    <img src="/jest.png" alt="Jest logo" />
                    <img src="/reactbootstrap.png" alt="Jest logo" />
                  </div>
                </div>
              </div>
              <h4>Sundaes on demand</h4>
            </a>
            <div className="project-wrapper">
              <div className="project">
                <img className="p-image" src="csoon.png" alt="" />
                <div className="tech">
                  {" "}
                  <p>
                    I am working on a few meaningful projects to showcase my
                    skills in different areas, especially in working with cloud
                    services and DevOps.
                  </p>
                  <p>They will appear here ASAP!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="featured-column right">
            <a
              href="https://github.com/eviva2000/Asana-clone"
              className="project-wrapper"
            >
              <div className="project">
                <img
                  className="p-image"
                  src="/asana-clone.png"
                  alt="asana-clone"
                />
                <div className="tech">
                  <p>
                    I had the honor of mentoring one of the HYF students in this
                    project. We built a project management system in which you
                    can create projects, invite other users to it and define
                    tasks. You can also assign tasks to other users and modify
                    tasks details.
                  </p>
                  <div className="logo-wrapper">
                    <img src="/logo512.png" alt="React logo" />
                    <img src="/nodejs-icon.svg" alt="Nodejs logo" />
                    <img src="/material-ui.png" alt="Material-ui logo" />
                    <img src="/firebase.png" alt="Firebase logo" />
                    <img src="/postgresql.png" alt="Postgresql logo" />
                  </div>
                </div>
              </div>
              <h4>Asana-clone</h4>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Canvas;
