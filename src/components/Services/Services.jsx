import React, { useEffect } from "react";
import "./Services.scss";
import servicesImg1 from "../../assets/images/services__images1.png";
import servicesImg2 from "../../assets/images/services__images2.png";
import servicesImg3 from "../../assets/images/services__images3.png";
import AOS from 'aos';
import "aos/dist/aos.css";

const Services = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });
  }, []);
  let data = [
    {
      id: 1,
      imges: servicesImg1,
      title: props.t("services__title1"),
      text: props.t("services__text1"),
    },
    {
      id: 2,
      imges: servicesImg2,
      title: props.t("services__title2"),
      text: props.t("services__text2"),
    },
    {
      id: 3,
      imges: servicesImg3,
      title: props.t("services__title3"),
      text: props.t("services__text3"),
    },
  ];
  const servicesList = data?.map((e) => (
    <li key={e.id} className="services__list-item" data-aos="fade-right">
      <img className="services__list-img"  src={e.imges} alt="" />
      <div className="services__list-card">
        <h3 className="services__list-title">{e.title}</h3>
        <p className="services__list-text">{e.text}</p>
      </div>
    </li>
  ));
  return (
    <section className="services">
      <div className="container">
        <div className="services__start">
          <h2 className="services__title" data-aos="fade-right">{props.t("xizmatlar")}</h2>
          <p className="services__text" data-aos="fade-right">{props.t("services__text")}</p>
          <ul className="services__list">{servicesList}</ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
