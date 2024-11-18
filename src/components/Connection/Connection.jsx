import React, { useEffect, useState } from "react";
import "./Connection.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const BOT_TOKEN = "6708331572:AAGi5u0j5WT-UkQ0u7eU69qHg3ZCE59DKbc";
const CHAT_ID = "-1002028151929";

const Connection = (props) => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let text = "";
    text += "Mijoz Habar Yubordi: %0A%0A";
    text += `Mijoz Ismi: ${name} %0A`;
    text += `Mijoz Telefon Raqami: ${tel} %0A`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`;
    fetch(url)
      .then(() => {
        setName("");
        setTel("");
        setIsModalOpen(true);
      })
      .catch((error) => console.error("Error sending message:", error));
  };

  const closeModal = () => setIsModalOpen(false);

  const handleTelChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setTel(value);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Animatsiya bir marta bo‘lsin
      mirror: false, // Performance uchun qayta harakatni o‘chirildi
    });
  }, []);

  return (
    <section
      className="connection"
      id="link"
      aria-labelledby="connection-title"
    >
      <div
        className="container"
        role="region"
        aria-labelledby="connection-title"
      >
        <div className="connection__start">
          <form
            className="connection__form"
            onSubmit={handleSubmit}
            data-aos="fade-right"
            aria-describedby="connection-description"
          >
            <h3 className="connection__form-title" id="connection-title">
              {props.t("connection__title")}
            </h3>
            <p id="connection-description" className="sr-only">
              {props.t("connection__title")}
            </p>
            <label htmlFor="name" className="sr-only"></label>
            <input
              id="name"
              type="text"
              placeholder={props.t("connection__name")}
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-required="true"
            />
            <label htmlFor="tel" className="sr-only">
            </label>
            <input
              id="tel"
              type="tel"
              placeholder="+998-94-033-72-12"
              value={tel}
              onChange={handleTelChange}
              required
              aria-required="true"
            />
            <button
              className="connection__form-btn"
              type="submit"
              aria-label={props.t("connection__btn")}
            >
              {props.t("connection__btn")}
            </button>
          </form>

          {isModalOpen && (
            <div
              role="dialog"
              aria-labelledby="modal-title"
              aria-describedby="modal-text"
            >
              <div className="modal">
                <p id="modal-text" className="modal__text">
                  {props.t("modal__text")}
                </p>
                <button
                  className="modal__btn"
                  onClick={closeModal}
                  aria-label={props.t("modal__btn")}
                >
                  {props.t("modal__btn")}
                </button>
              </div>
              <div className="modal__black" aria-hidden="true"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Connection;
