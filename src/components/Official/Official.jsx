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
    <section className='offical' id="official" aria-labelledby="official-title">
      <div className="container">
        <div className="offical__start">
         
          <img 
            className='offical__img' 
            src={officalImg} 
            alt={props.t("official__alt_img")} 
            data-aos="fade-right" 
            width="600" 
            height="400" 
            loading="lazy" 
          />
          
         
          <div className="offical__card">
            <img 
              className='offical__card-img' 
              src={officalIcon} 
              alt={props.t("official__alt_icon")} 
              data-aos="fade-right" 
              width="80" 
              height="80" 
              loading="lazy" 
            />
            <h3 id="official-title" className="offical__card-title" data-aos="fade-right">
              {props.t("offical__title")}
            </h3>
            <a href="#link" className='offical__card-btn' data-aos="fade-right" aria-label={props.t("bog'lanish")}>
              {props.t("bog'lanish")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Official;
