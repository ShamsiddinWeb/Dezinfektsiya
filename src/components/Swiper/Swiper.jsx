import "./Swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { EffectCoverflow } from "swiper/modules";
import React from "react";
import swiperimg1 from "../../assets/icons/swiper1.png";
import swiperimg2 from "../../assets/icons/swiper2.png";
import swiperimg3 from "../../assets/icons/swiper3.png";
import swiperimg4 from "../../assets/icons/swiper4.png";
import swiperimg5 from "../../assets/icons/swiper5.png";
import swiperimg6 from "../../assets/icons/swiper6.png";
import swiperimg7 from "../../assets/icons/swiper7.png";

const SwiperComp = (props) => {
  return (
    <>
      <Swiper id="serviceabout"
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={true}
        modules={[Pagination, Autoplay, EffectCoverflow]}
        className="mySwiper"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        <SwiperSlide>
          <div className="swiperComp">
            <img className="swiperComp__img" src={swiperimg1} alt="" />
            <h3 className="swiperComp__title">{props.t("swiper__title1")}</h3>
            <p className="swiperComp__text">{props.t("swiper__text1")}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperComp">
            <img className="swiperComp__img" src={swiperimg2} alt="" />
            <h3 className="swiperComp__title">{props.t("swiper__title2")}</h3>
            <p className="swiperComp__text">{props.t("swiper__text2")}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperComp">
            <img className="swiperComp__img" src={swiperimg3} alt="" />
            <h3 className="swiperComp__title">{props.t("swiper__title3")}</h3>
            <p className="swiperComp__text">{props.t("swiper__text3")}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperComp">
            <img className="swiperComp__img" src={swiperimg4} alt="" />
            <h3 className="swiperComp__title">{props.t("swiper__title4")}</h3>
            <p className="swiperComp__text">{props.t("swiper__text4")}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperComp">
            <img className="swiperComp__img" src={swiperimg5} alt="" />
            <h3 className="swiperComp__title">{props.t("swiper__title5")}</h3>
            <p className="swiperComp__text">{props.t("swiper__text5")}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperComp">
            <img className="swiperComp__img" src={swiperimg6} alt="" />
            <h3 className="swiperComp__title">{props.t("swiper__title6")}</h3>
            <p className="swiperComp__text">{props.t("swiper__text6")}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperComp">
            <img className="swiperComp__img" src={swiperimg7} alt="" />
            <h3 className="swiperComp__title">{props.t("swiper__title7")}</h3>
            <p className="swiperComp__text">{props.t("swiper__text7")}</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperComp;
