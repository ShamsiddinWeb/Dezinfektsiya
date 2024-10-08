import React, { useEffect } from "react";
import "./Footer.scss";
import footerIcon from "../../assets/icons/headerIcon.png";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__start">
          <a href="#" data-aos="fade-right">
            <img className="footer__img" src={footerIcon} alt="" width={250} />
          </a>
          <div className="footer__card">
            <Link className="footer__link" to={"/"} data-aos="fade-right">
              <CiLocationOn className="footer__icon" />
              <p className="footer__text">{props.t("footer-title")}</p>
              <GoArrowUpRight className="footer__icon2" />
            </Link>
            <Link
              className="footer__link"
              to={"Tel:998940337212"}
              data-aos="fade-right"
            >
              <BsTelephone className="footer__icon" />
              <p className="footer__text">+998 94 033 72 12</p>
              <GoArrowUpRight className="footer__icon2" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
