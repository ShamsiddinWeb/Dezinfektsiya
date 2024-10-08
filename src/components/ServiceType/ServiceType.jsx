import React, { useEffect } from "react";
import "./ServiceType.scss";
import serviceImg1 from "../../assets/images/serviceImg1.jpg";
import serviceImg2 from "../../assets/images/serviceImg2.jpg";
import serviceImg3 from "../../assets/images/serviceImg3.jpg";
import serviceImg4 from "../../assets/images/serviceImg4.jpg";
import serviceImg5 from "../../assets/images/serviceImg5.jpg";
import AOS from 'aos';
import "aos/dist/aos.css";

const ServiceType = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);
  let data = [
    {
      id: 1,
      imges: serviceImg1,
      title: props.t("serviceType__title1"),
      text: props.t("serviceType__text1"),
    },
    {
      id: 2,
      imges: serviceImg2,
      title: props.t("serviceType__title2"),
      text: props.t("serviceType__text2"),
    },
    {
      id: 3,
      imges: serviceImg3,
      title: props.t("serviceType__title3"),
      text: props.t("serviceType__text3"),
    },
    {
      id: 4,
      imges: serviceImg4,
      title: props.t("serviceType__title4"),
      text: props.t("serviceType__text4"),
    },
    {
      id: 5,
      imges: serviceImg5,
      title: props.t("serviceType__title5"),
      text: props.t("serviceType__text5"),
    },
  ];
  const serviceList = data?.map((e) => (
    <li key={e.id} className="serviceType__list-item" data-aos="fade-right">
      <h3 className="serviceType__list-title">{e.title}</h3>
      <p className="serviceType__list-text">{e.text}</p>
      <div className="serviceType__list-card">
        <a href="#link" className="serviceType__list-btn">{props.t("bog'lanish")}</a>
        <img className="serviceType__list-img" src={e.imges} alt="" />
      </div>
    </li>
  ));
  return (
    <section className="serviceType">
      <div className="container">
        <div className="serviceType__start">
          <h2 className="serviceType__title" data-aos="fade-right">{props.t("serviceType")}</h2>
          <ul className="serviceType__list" >{serviceList}</ul>
        </div>
      </div>
    </section>
  );
};

export default ServiceType;
