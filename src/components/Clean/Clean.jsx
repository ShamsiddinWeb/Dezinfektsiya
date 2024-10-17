import React, { useEffect } from "react";
import "./Clean.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Clean = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <section className="clean">
      <div className="container">
        <div className="clean__start">
          <h2 className="clean__start-title" data-aos="fade-right">
            {props.t("clean__title")}
          </h2>
          <p className="clean__start-text" data-aos="fade-right">
            {props.t("clean__text")}
          </p>
          <a href="#link" className="clean__start-btn" data-aos="fade-right">{props.t("bog'lanish")}</a>
        </div>
      </div>
    </section>
  );
};

export default Clean;
