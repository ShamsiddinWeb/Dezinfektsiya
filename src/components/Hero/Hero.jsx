import React, { useEffect } from "react";
import "./Hero.scss";
import heroLeftImg from "../../assets/images/hero__left-img.png";
import heroRightImg from "../../assets/images/hero__img.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="hero" id="main">
      <div className="container">
        <div className="hero__start ">
          <div className="hero__left">
            <h1 className="hero__left-title" data-aos="fade-right">{props.t("hero__title")}</h1>
            <div className="hero__left-card">
              <p className="hero__left-text" data-aos="fade-right">{props.t("hero__text")}</p>
              <img
                className="hero__left-img"
                src={heroLeftImg}
                alt=""
                width={300}
              />
            </div>
            <a href="#link" className="hero__left-btn">{props.t("bog'lanish")}</a>
          </div>
          <img
            className="hero__right-img"
            src={heroRightImg}
            alt=""
            width={750}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
