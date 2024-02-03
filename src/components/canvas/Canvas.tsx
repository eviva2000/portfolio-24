import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";
const Canvas: React.FC = () => {
  return (
    <section>
      <div className="content">
        <div className="info">
          <p>Join us for a fantastic </p>
        </div>
        <Swiper
          effect="cards"
          grabCursor={true}
          initialSlide={2}
          speed={500}
          loop={true}
          mousewheel={{ invert: false }}
          modules={[EffectCards]}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          {/* Add as many SwiperSlide components as you need */}
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
  );
};

export default Canvas;
