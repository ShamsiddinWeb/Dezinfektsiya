import React from "react";
// import heroimg from "../../assets/heroimg.png";
import "./Hero.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// import img1 from "../../assets/hero__img3.png";

import "swiper/css";

const Hero = (props) => {
  return (
    <div className="hero">
      <div className="max-container">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="hero__start1">
              <div className="container">
                <h1 className="hero__title">{props.t("hero__title1")}</h1>
                <p className="hero__text">{props.t("hero__text1")}</p>
                <a className="hero__btn" href="#form">{props.t("btn")}</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero__start2">
              <div className="container">
                <h1 className="hero__title">{props.t("hero__title2")}</h1>
                <p className="hero__text">{props.t("hero__text2")}</p>
                <a className="hero__btn" href="#form">{props.t("btn")}</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero__start3">
              <div className="container hero__card">
                <h1 className="hero__title">{props.t("hero__title3")}</h1>
                <p className="hero__text">{props.t("hero__text3")}</p>
                <a className="hero__btn" href="#form">{props.t("btn")}</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero__start4">
              <div className="container">
                <h1 className="hero__title">{props.t("hero__title4")}</h1>
                <p className="hero__text">{props.t("hero__text4")}</p>
                <a className="hero__btn" href="#form">{props.t("btn")}</a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
