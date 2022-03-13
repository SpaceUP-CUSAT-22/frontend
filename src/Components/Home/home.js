import React from "react";
import "./home.css";

import home_curve from "../../Assets/home_curve.svg";

export default function Home() {
  return (
    <div className="home_parent">
      <img src={home_curve} className="home_curve" alt="" />
      <div className="home_bg"></div>
      <div className="home__left">
        <div className="home__text">
          <h1 className="home-title">Lorem Ipsum is simply dummy text</h1>

          <p className="home-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text Lorem Ipsum is simply
            dummy text of the printing{" "}
          </p>

          <button className="home-button">Register Now</button>
        </div>
      </div>

      <div className="home__right"></div>
    </div>
  );
}
