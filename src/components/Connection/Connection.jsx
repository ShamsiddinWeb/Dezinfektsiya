import React, { useEffect, useState } from "react";
import "./Connection.scss";
import formIcon1 from "../../assets/icons/form__icon1.svg";
import formIcon2 from "../../assets/icons/form__icon2.svg";
import formIcon3 from "../../assets/icons/form__icon3.svg";
import formIcon4 from "../../assets/icons/form__icon4.svg";
import formIcon5 from "../../assets/icons/form__icon5.svg";
import formIcon6 from "../../assets/icons/form__icon6.svg";
import formIcon7 from "../../assets/icons/form__icon7.svg";
import formIcon8 from "../../assets/icons/form__icon8.svg";
import formIcon9 from "../../assets/icons/form__icon9.svg";
import formIcon10 from "../../assets/icons/form__icon10.svg";
import formIcon11 from "../../assets/icons/form__icon11.svg";
import formIcon12 from "../../assets/icons/form__icon12.svg";
import formIcon13 from "../../assets/icons/form__icon13.svg";
import formIcon14 from "../../assets/icons/form__icon14.svg";
import formIcon15 from "../../assets/icons/form__icon15.svg";
import formIcon16 from "../../assets/icons/form__icon16.svg";
import formIcon17 from "../../assets/icons/form__icon17.svg";
import formIcon18 from "../../assets/icons/form__icon18.svg";
import formIcon19 from "../../assets/icons/form__icon19.svg";
import formIcon20 from "../../assets/icons/form__icon20.svg";
import formIcon21 from "../../assets/icons/form__icon21.svg";
import formIcon22 from "../../assets/icons/form__icon22.svg";

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

  let data = [
    {
      id: 1,
      img: formIcon1,
      text: props.t("form__text1"),
    },
    {
      id: 2,
      img: formIcon2,
      text: props.t("form__text2"),
    },
    {
      id: 3,
      img: formIcon3,
      text: props.t("form__text3"),
    },
    {
      id: 4,
      img: formIcon4,
      text: props.t("form__text4"),
    },
    {
      id: 5,
      img: formIcon5,
      text: props.t("form__text5"),
    },
    {
      id: 6,
      img: formIcon6,
      text: props.t("form__text6"),
    },
    {
      id: 7,
      img: formIcon7,
      text: props.t("form__text7"),
    },
    {
      id: 8,
      img: formIcon8,
      text: props.t("form__text8"),
    },
    {
      id: 9,
      img: formIcon9,
      text: props.t("form__text9"),
    },
    {
      id: 10,
      img: formIcon10,
      text: props.t("form__text10"),
    },
    {
      id: 11,
      img: formIcon11,
      text: props.t("form__text11"),
    },
    {
      id: 12,
      img: formIcon12,
      text: props.t("form__text12"),
    },
    {
      id: 13,
      img: formIcon13,
      text: props.t("form__text13"),
    },
    {
      id: 14,
      img: formIcon14,
      text: props.t("form__text14"),
    },
    {
      id: 15,
      img: formIcon15,
      text: props.t("form__text15"),
    },
    {
      id: 16,
      img: formIcon16,
      text: props.t("form__text16"),
    },
    {
      id: 17,
      img: formIcon17,
      text: props.t("form__text17"),
    },
    {
      id: 18,
      img: formIcon18,
      text: props.t("form__text18"),
    },
    {
      id: 19,
      img: formIcon19,
      text: props.t("form__text19"),
    },
    {
      id: 20,
      img: formIcon20,
      text: props.t("form__text20"),
    },
    {
      id: 21,
      img: formIcon21,
      text: props.t("form__text21"),
    },
    {
      id: 22,
      img: formIcon22,
      text: props.t("form__text22"),
    },
  ];

  let formData = data?.map((e) => (
    <li key={e.id} className="connection__list-item">
      <img src={e.img} alt="" width={30}/>
      <p className="connection__list-text">{e.text}</p>
    </li>
  ));

  return (
    <section className="connection" id="contacts">
      <div className="container">
        <div className="connection__start">
          <form className="connection__form" onSubmit={handleSubmit}>
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

            <ul className="connection__list"> {formData}</ul>

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
