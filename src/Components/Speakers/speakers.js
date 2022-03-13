import React from "react";
import "./speakers.css";

import speaker1 from "../../Assets/speaker1.png";
import speaker2 from "../../Assets/speaker2.png";
import speaker3 from "../../Assets/speaker3.png";

import line1 from "../../Assets/line1.png";
import line2 from "../../Assets/line2.png";

import arrow from "../../Assets/arrow.png";

function Speakers() {
  return (
    <div className="wrapper">
      <div className="speaker__card">
        <img src={speaker1} className="speaker-photo" alt="" />

        <div className="speaker__details">
          <h1 className="speaker-name">Name</h1>
          <p className="speaker-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="read-more">
            Read More
            <img src={arrow} className="icon-arrow" alt="" />
          </p>
        </div>
      </div>

      <div className="speaker__card">
        <img src={speaker2} className="speaker-photo" alt="" />

        <div className="speaker__details">
          <h1 className="speaker-name">Name</h1>
          <p className="speaker-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="read-more">
            Read More
            <img src={arrow} className="icon-arrow" alt="" />
          </p>
        </div>
      </div>

      <div className="speaker__card">
        <img src={speaker3} className="speaker-photo" alt="" />

        <div className="speaker__details">
          <h1 className="speaker-name">Name</h1>
          <p className="speaker-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="read-more">
            Read More
            <img src={arrow} className="icon-arrow" alt="" />
          </p>
        </div>
      </div>

      <img src={line1} className="line line1" alt="" />
      <img src={line2} className="line line2" alt="" />
    </div>
  );
}

export default Speakers;
