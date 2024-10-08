import React, { useState } from "react";
import headerImg from "../../assets/icons/headerIcon.png";
import { Link } from "react-router-dom";
import "./Header.scss";
import Hero from "../Hero/Hero";

function Header(props) {
  let data = [
    {
      id: 1,
      link: "#main",
      title: props.t("asosiy"),
    },
    {
      id: 2,
      link: "#about",
      title: props.t("xaqimizda"),
    },
    {
      id: 3,
      link: "#Services",
      title: props.t("xizmatlar"),
    },
    {
      id: 4,
      link: "#faq",
      title: props.t("faq"),
    },
  ];
  const headerList = data?.map((e) => (
    <li
      key={e.id}
      onClick={() => setToggle(!toogle)}
      className="header__list-item"
    >
      <a href={e.link} className="header__list-link">
        {e.title}
      </a>
    </li>
  ));

  const [toogle, setToggle] = useState(false);
  return (
    <header className={`header ${toogle ? "open" : ""}`}>
      <div className="container">
        <div
          class="header__active dark_div"
          onClick={() => setToggle(!toogle)}
        ></div>
        <div className="header__start">
          <a href="#">
            <img
              className="header__icon"
              src={headerImg}
              alt="This is the logo"
              width={250}
            />
          </a>
          <div className="header__right">
            <div className="header__card">
              <ul className="header__list">{headerList}</ul>
              <a
                href="#link"
                className="header__btn2"
                onClick={() => setToggle(!toogle)}
              >
                {props.t("bog'lanish")}
              </a>
            </div>
            <select
              className="header__select"
              name="Lng"
              id="lng"
              onChange={props.handleChange}
              value={props.laungage}
            >
              <option value="uz">Uzbek</option>
              <option value="ru">Русский</option>
              <option value="eng">English</option>
            </select>
            <div className="header__menu-burgers">
              <button
                className="header__menu"
                id="menu-burger"
                onClick={() => setToggle(!toogle)}
              >
                <span className="header__menu-span"></span>
                <span className="header__menu-span"></span>
                <span className="header__menu-span"></span>
              </button>
            </div>
            <a href="#link" className="header__btn">
              {props.t("bog'lanish")}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
