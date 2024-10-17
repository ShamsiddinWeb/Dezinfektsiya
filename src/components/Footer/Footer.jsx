import React from "react";
import headerImg from "../../assets/icons/headerIcon.png";
import { FaPhoneAlt } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import "./Footer.scss";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__start">
          <div className="footer__left">
            <a className="footer__left-link" href="#">
              <img src={headerImg} alt="" width={100} />
            </a>
            <div className="footer__left-card">
              <a href="tel:998940337212">
                <FaPhoneAlt />
              </a>
              <a href="https://www.instagram.com/homekit.uz/">
                <RiInstagramFill />
              </a>
              <a href="https://t.me/Tilla717">
                <FaTelegramPlane />
              </a>
            </div>
          </div>
          <div className="footer__middle">
            <h3 className="footer__middle-title">
              {props.t("footer__middle-title")}
            </h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a className="footer__item-link" href="#">
                  {props.t("footer__link1")}
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__item-link" href="#about">
                  {props.t("footer__link2")}
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__item-link" href="#contacts">
                  {props.t("footer__link3")}
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__right">
            <h3 className="footer__right-title">
              {props.t("footer__right-title")}
            </h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a className="footer__item-link" href="#advontage">
                  {props.t("typeServices__title")}
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__item-link" href="#main">
                  {props.t("footer__link5")}
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__item-link" href="#serviceabout">
                  {props.t("footer__link6")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__end">
          <p className="footer__end-left">{props.t("footer__text1")}</p>
          <p className="footer__end-left">
            {props.t("footer__text2")}
            <br className="footer__end-br" />
            <a className="footer__end-link" href="https://t.me/it_time_admin">
              {props.t("footer__link7")}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
