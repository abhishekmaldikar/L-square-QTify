import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import styles from "./Carousel.module.css"
import CardsSection from "../Card/CardsSection";
import 'swiper/css';
import 'swiper/css/navigation';

const Carousel = ({ data }) => {
  return (
      <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={10}
      slidesPerView={9}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map(({ id, image, title, follows,likes }) => (
          <SwiperSlide key={id}>
            <CardsSection
              img={image}
              title={title}
              follows={follows}
              likes={likes}
            />
          </SwiperSlide>
        ))}
      </Swiper>
  );
};

export default Carousel;
