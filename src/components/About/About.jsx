import React, { useEffect } from "react";
import "./About.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImg1 from "../../assets/images/about__img1.jpg";
import aboutImg2 from "../../assets/images/about__img2.jpeg";
import aboutImg3 from "../../assets/images/about__img3.jpg";
import aboutImg4 from "../../assets/images/about__img4.jpg";
import aboutImg5 from "../../assets/images/about__img5.jpg";

const About = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="about" id="main">
      <div className="container">
        <div className="about__start">
          <h2 className="about__title">{props.t("about__title")}</h2>
          <p className="about__text">{props.t("about__text")}</p>

          <ul className="about__list1">
            <li className="about__item">
              <img src={aboutImg1} alt="" width={300} />
              <div className="about__item-right">
                <h3 className="about__item-title">
                  {props.t("about__title1")}
                </h3>
                <p className="about__item-text">{props.t("about__text1")}</p>
              </div>
            </li>
          </ul>

          <ul className="about__list">
            <li className="about__item1">
              <img src={aboutImg2} alt="" width={300} />
              <div className="about__item-right">
                <h3 className="about__item-title">
                  {props.t("about__title2")}
                </h3>
                <p className="about__item-text">{props.t("about__text2")}</p>
              </div>
            </li>
            <li className="about__item1">
              <img src={aboutImg3} alt="" width={300} />
              <div className="about__item-right">
                <h3 className="about__item-title">
                  {props.t("about__title3")}
                </h3>
                <p className="about__item-text">{props.t("about__text3")}</p>
              </div>
            </li>
          </ul>

          <ul className="about__list1">
            <li className="about__item">
              <img src={aboutImg4} alt="" width={300} />
              <div className="about__item-right">
                <h3 className="about__item-title">
                  {props.t("about__title4")}
                </h3>
                <p className="about__item-text">{props.t("about__text4")}</p>
              </div>
            </li>
            <li className="about__item">
              <img src={aboutImg5} alt="" width={300} />
              <div className="about__item-right">
                <h3 className="about__item-title">
                  {props.t("about__title5")}
                </h3>
                <p className="about__item-text">{props.t("about__text5")}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
