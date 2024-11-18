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
      once: true, 
      mirror: false,
    });
  }, []);

  return (
    <footer className="footer" role="contentinfo" aria-label="Website footer">
      <div className="container">
        <div className="footer__start">
          
          <a
            href="#"
            className="footer__logo-link"
            aria-label={props.t("footer-logo-alt")}
            data-aos="fade-right"
          >
            <img
              className="footer__img"
              src={footerIcon}
              alt={props.t("footer-logo-alt")}
              width={250}
              height="auto"
              loading="lazy"
            />
          </a>

          <div className="footer__card">
           
            <Link
              className="footer__link"
              to={"/"}
              aria-label={props.t("footer-location-link")}
              data-aos="fade-right"
            >
              <CiLocationOn className="footer__icon" aria-hidden="true" />
              <p className="footer__text">{props.t("footer-title")}</p>
              <GoArrowUpRight className="footer__icon2" aria-hidden="true" />
            </Link>

            <a
              className="footer__link"
              href="tel:+998940337212"
              aria-label={props.t("footer-phone-link")}
              data-aos="fade-right"
            >
              <BsTelephone className="footer__icon" aria-hidden="true" />
              <p className="footer__text">+998 94 033 72 12</p>
              <GoArrowUpRight className="footer__icon2" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
