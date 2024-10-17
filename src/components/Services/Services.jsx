import React from "react";
import "./Services.scss";
import headerImg from "../../assets/icons/headerIcon.png";

const Services = (props) => {
  return (
    <section className="services" id="about">
      <div className="container">
        <div className="services__start">
          <div className="services__left">
            <h3 className="services__left-title">
              {props.t("services__title1")}
            </h3>
            <p className="services__left-text2">{props.t("services__text1")}</p>
          </div>
          <div className="services__right">
            <div className="services__right-card">
              <img src={headerImg} alt=""  width={100} />
              <div className="services__right-group">
                <h3 className="services__left-title">
                  {props.t("services__title2")}
                </h3>
                <p className="services__left-text">
                  {props.t("O'zbekiston")}
                </p>
              </div>
            </div>
            <p className="services__left-text2">{props.t("services__text2")}</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/tDetkOezsVk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
