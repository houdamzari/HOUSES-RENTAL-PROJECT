import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import isMobile from "ismobilejs";
import HeaderSliderImg from "./HeaderSliderImg";
import Card from "../Card/Card";

SwiperCore.use([Navigation]);

const Wrapper = styled.div`
  width: 110%;
  margin-left: -100px;
  .distance {
    text-align: center;
    background: #fdf189;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;

    .swiper-wrapper {
      margin-left: -32px;
    }
  }
`;

function HeaderSlider({ img, navigationNextRef, navigationPrevRef }) {
  const [activeSlideHeader, setActiveSliderHeader] = React.useState(null);
  console.log(img);
  return (
    <Wrapper>
      <Swiper
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onInit={(swiper) => {
          setActiveSliderHeader(swiper.activeIndex);
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        slidesPerView={isMobile().phone ? 2 : 5}
        initialSlide={2}
        spaceBetween={isMobile().phone ? 80 : 50}
        autoplay={{ delay: 3000 }}
        allowTouchMove={true}
        onSlideChange={(swiper) => setActiveSliderHeader(swiper.activeIndex)}
        centeredSlides={true}
      >
        {img.map((item, i) => (
          <SwiperSlide key={i + "98989"}>
            <Card data={item} id={i} activeSlide={activeSlideHeader} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
}

export default HeaderSlider;
