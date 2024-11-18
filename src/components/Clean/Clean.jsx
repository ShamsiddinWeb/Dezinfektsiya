import React, { useEffect } from "react";
import "./Clean.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Clean = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <section
      className="clean"
      id="clean-section"
      aria-labelledby="clean-title"
      aria-describedby="clean-description"
    >
      <div className="container" role="region" aria-labelledby="clean-title">
        <div className="clean__start">
          <h2
            className="clean__start-title"
            id="clean-title"
            data-aos="fade-right"
          >
            {props.t("clean__title")}
          </h2>
          <p
            className="clean__start-text"
            id="clean-description"
            data-aos="fade-right"
          >
            {props.t("clean__text")}
          </p>
          <a
            href="#link"
            className="clean__start-btn"
            data-aos="fade-right"
            role="button"
            aria-label={props.t("bog'lanish")}
          >
            {props.t("bog'lanish")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Clean;
