import React from 'react';
import './ScrollingText.css';
import headerImg from "../../assets/icons/headerIcon.png";

const ScrollingText = (props) => {
  return (
    <div className="scrolling-container">
      <div className="scrolling-text left">{props.t("ScrollingText")}</div>
      <div className="scrolling-text right">{props.t("ScrollingText")}</div>
      <img src={headerImg} alt="Logo" className="center-logo" />
    </div>
  );
};

export default ScrollingText;
