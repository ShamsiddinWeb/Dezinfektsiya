import React, { useEffect } from "react";
import "./Hero.scss";
import heroRightImg from "../../assets/images/image.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className="hero" id="main" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero__start">
          <div className="hero__left">
            <h1
              id="hero-title"
              className="hero__left-title"
              data-aos="fade-right"
            >
              {props.t("hero__title")}
            </h1>
            <div className="hero__left-card">
              <p
                className="hero__left-text"
                data-aos="fade-right"
                aria-describedby="hero-title"
              >
                {props.t("hero__text")}
              </p>
            </div>
            <a
              href="#link"
              className="hero__left-btn"
              aria-label={props.t("bog'lanish")}
            >
              {props.t("bog'lanish")}
            </a>
          </div>

          <img
            className="hero__right-img"
            src={heroRightImg}
            alt={props.t("hero__alt")}
            width="750"
            height="auto"
            loading="lazy"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
