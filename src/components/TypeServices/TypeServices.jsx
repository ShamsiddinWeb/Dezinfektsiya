import React from "react";
import "./TypeServices.scss";
import typeServicesImg1 from "../../assets/icons/typeServicesImg1.png";
import typeServicesImg2 from "../../assets/icons/typeServicesImg2.png";
import typeServicesImg3 from "../../assets/icons/typeServicesImg3.png";
import typeServicesImg4 from "../../assets/icons/typeServicesImg4.png";
import typeServicesImg5 from "../../assets/icons/typeServicesImg5.png";
import typeServicesImg6 from "../../assets/icons/typeServicesImg6.png";
import { t } from "i18next";

const TypeServices = (props) => {
  let data = [
    {
      id: 1,
      img: typeServicesImg1,
      title: props.t("typeServices__text1"),
    },
    {
      id: 2,
      img: typeServicesImg2,
      title: props.t("typeServices__text2"),
    },
    {
      id: 3,
      img: typeServicesImg3,
      title: props.t("typeServices__text3"),
    },
    {
      id: 4,
      img: typeServicesImg4,
      title: props.t("typeServices__text4"),
    },
    {
      id: 5,
      img: typeServicesImg5,
      title: props.t("typeServices__text5"),
    },
    {
      id: 6,
      img: typeServicesImg6,
      title: props.t("typeServices__text6"),
    },
  ];
  let typeServicesData = data?.map((e) => (
    <li key={e.id} className="typeServices__item">
      <a className="typeServices__link" href="#">
        <img className="typeServices__link-img" src={e.img} alt="" width={50}/>
        <p className="typeServices__link-text">{e.title}</p>
      </a>
    </li>
  ));
  return (
    <section className="typeServices" id="advontage">
      <div className="container">
        <div className="typeServices__start">
          <h1 className="typeServices__title">
            {props.t("typeServices__title")}
          </h1>
          <ul className="typeServices__list">{typeServicesData}</ul>
        </div>
      </div>
    </section>
  );
};

export default TypeServices;
