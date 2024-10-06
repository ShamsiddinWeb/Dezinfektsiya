import React, { useEffect, useState } from "react";
import "./Faq.scss";
import AOS from 'aos';
import "aos/dist/aos.css";

const FAQ = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);
  const faqData = [
    {
      title: props.t("faq__title1"),
      text: props.t("faq__text1"),
    },
    {
      title: props.t("faq__title2"),
      text: props.t("faq__text2"),
    },
    {
      title: props.t("faq__title3"),
      text: props.t("faq__text3"),
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <div className="container">
        <h2 data-aos="fade-right" className="faq__title">ФАК</h2>
        {faqData.map((item, index) => (
          <div data-aos="fade-right" className="faq__card" key={index}>
            <div className="faq__group" onClick={() => toggleAnswer(index)}>
              <span className="faq__group-text">{item.title}</span>
              <span className="faq__icon">
                {activeIndex === index ? "▲" : "▼"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq__text" data-aos="fade-right">{item.text}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
