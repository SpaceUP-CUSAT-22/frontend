import React from "react";
import "./home.css";
import spaceup_logo from "../../Assets/space_up_logo_1.svg";

export default function Home() {
  return (
    <div className="wrapper">
      <div className="home__left">
        <img src={spaceup_logo} className="home-logo" />

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
