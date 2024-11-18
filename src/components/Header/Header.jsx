import React, { useState, useMemo } from "react";
import headerImg from "../../assets/icons/headerIcon.png";
import "./Header.scss";

function Header(props) {
  const [toogle, setToggle] = useState(false);

  const data = useMemo(() => [
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
  ], [props.t]);

  const headerList = data.map((e) => (
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

  return (
    <header className={`header ${toogle ? "open" : ""}`}>
      <div className="container">
        <div
          className="header__active dark_div"
          onClick={() => setToggle(!toogle)}
        ></div>
        <div className="header__start">
          <a href="#" aria-label="Navigate to homepage">
            <img
              className="header__icon"
              src={headerImg}
              alt="Company Logo"
              width={200}
              height={50}
              loading="lazy"
            />
          </a>
          <div className="header__right">
            <div className="header__card">
              <ul className="header__list">{headerList}</ul>
              <a
                onClick={() => setToggle(!toogle)} 
                className="header__btn2"
                aria-label="Contact button"
                href="#link"
              >
                {props.t("bog'lanish")}
              </a>
            </div>
            <div>

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
            </div>
            <div className="header__menu-burgers">
              <button
                className="header__menu"
                onClick={() => setToggle(!toogle)}
                aria-label="Toggle menu"
              >
                <span className="header__menu-span"></span>
                <span className="header__menu-span"></span>
                <span className="header__menu-span"></span>
              </button>
            </div>
            <a 
              onClick={() => setToggle(!toogle)} 
              className="header__btn" 
              aria-label="Contact button"
              href="#link"
            >
              {props.t("bog'lanish")}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
