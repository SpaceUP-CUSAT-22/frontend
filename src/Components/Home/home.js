import React from "react";
import "./home.css";
import "./home_anim.css";
import "animate.css";

/* import astronaut from "../../Assets/spaceup_illustration_astronaut.svg";
import computer from "../../Assets/spaceup_illustration_computer.svg";
import person from "../../Assets/spaceup_illustration_person.svg";
import pot from "../../Assets/spaceup_illustration_pot.svg";
import satellite from "../../Assets/spaceup_illustration_satellite.svg";
import tea from "../../Assets/spaceup_illustration_tea.svg"; */
import home_layout from "../../Assets/spaceup_illustration.svg";
import home_curve from "../../Assets/home_curve.svg";

export default function Home() {
  return (
    <div className="home_parent">
      <img src={home_curve} className="home_curve" alt="" />
      <div className="home_bg"></div>
      <div className="home__left">
        <div className="home__text">
          <h1 className="home-title animate__animated animate__slideInUp">Lorem Ipsum is simply dummy text</h1>

          <p className="home-description animate__animated animate__slideInLeft">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text Lorem Ipsum is simply
            dummy text of the printing{" "}
          </p>

          <button className="home-button custom_pop">Register Now</button>
        </div>
      </div>

      <div className="home__right">
        <img src={home_layout} className="home_layout" alt="" />
        {/*<img src={astronaut} className="home__astronaut" alt="" />
        <img src={person} className="home__person" alt="" />
        <img src={pot} className="home__pot" alt="" />
        <img src={satellite} className="home__satellite" alt="" />
        <img src={tea} className="home__tea" alt="" />*/}
      </div>
    </div>
  );
}
