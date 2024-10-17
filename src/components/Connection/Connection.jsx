import React, { useEffect, useState } from "react";
import "./Connection.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const BOT_TOKEN = "6708331572:AAGi5u0j5WT-UkQ0u7eU69qHg3ZCE59DKbc";
const CHAt_ID = "-1002028151929";
const USER_ID = "6386975284";

const Connection = (props) => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    let text = "";
    text += "Mijoz Habar Yubordi: %0A%0A";
    text += `Mijoz Ismi: ${name} %0A`;
    text += `Mijoz Telefon Raqami: ${tel} %0A`;

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAt_ID}&text=${text}`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    setName(""), setTel(""), setIsModalOpen(true);
  }
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setTel(value);
    }
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="connection" id="link">
      <div className="container">
        <div className="connection__start">
          <form
            className="connection__form"
            onSubmit={handleSubmit}
            data-aos="fade-right"
          >
            <h3 className="connection__form-title">
              {props.t("connection__title")}
            </h3>
            <input
              type="text"
              placeholder={props.t("connection__name")}
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              placeholder="+998-94-033-72-12"
              value={tel}
              onChange={handleChange}
              required
            />

            <button className="connection__form-btn">
              {props.t("connection__btn")}
            </button>
          </form>
          {isModalOpen && (
            <div>
              <div className="modal">
                <p className="modal__text">{props.t("modal__text")}</p>
                <button className="modal__btn" onClick={closeModal}>
                  {props.t("modal__btn")}
                </button>
              </div>
              <div className="modal__black"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Connection;
