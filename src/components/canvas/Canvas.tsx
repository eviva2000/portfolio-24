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
            <h1>I am an entusiastic </h1>
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
              {" "}
              <h2>Backend Explorer</h2>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <h2>Mom of 2</h2>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <h2>Design patterns learner</h2>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <h2>Critical thinker</h2>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <h2>Music student</h2>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <h2>DevOps explorer</h2>
            </SwiperSlide>

            <SwiperSlide>
              {" "}
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
            <div className="project">
              <h2>Project 1</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                luctus, nisl sit amet tincidunt tincidunt, nunc odio ultricies
                lacus, in tincidunt odio purus nec felis. Donec nec nisl vitae
                justo tincidunt tincidunt.
              </p>
            </div>
            <div className="project">
              <h2>Project 2</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                luctus, nisl sit amet tincidunt tincidunt, nunc odio ultricies
                lacus, in tincidunt odio purus nec felis. Donec nec nisl vitae
                justo tincidunt tincidunt.
              </p>
            </div>
          </div>
          <div className="featured-column right">
            <div className="project">
              <h2>Project 3</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                luctus, nisl sit amet tincidunt tincidunt, nunc odio ultricies
                lacus, in tincidunt odio purus nec felis. Donec nec nisl vitae
                justo tincidunt tincidunt.
              </p>
            </div>
            <div className="project">
              <h2>Project 4</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                luctus, nisl sit amet tincidunt tincidunt, nunc odio ultricies
                lacus, in tincidunt odio purus nec felis. Donec nec nisl vitae
                justo tincidunt tincidunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Canvas;
