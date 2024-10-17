import React, { useEffect } from 'react'
import "./Official.scss"
import officalImg from "../../assets/images/offical__img.jpg"
import officalIcon from "../../assets/icons/offical__icon.svg"
import AOS from 'aos';
import "aos/dist/aos.css";

const Official = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <section className='offical'>
      <div className="container">
        <div className="offical__start">
          <img className='offical__img' src={officalImg} alt="" data-aos="fade-right" />
          <div className="offical__card">
            <img className='offical__card-img' src={officalIcon} alt="" data-aos="fade-right" />
            <h3 className="offical__card-title" data-aos="fade-right">
              {props.t("offical__title")}
            </h3>
            <a href="#link" className='offical__card-btn' data-aos="fade-right">{props.t("bog'lanish")}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Official