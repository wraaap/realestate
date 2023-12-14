import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="g-container paddings innerWidth">
        <div className="inner-container flexColCenter">
          <span className="primaryText">Get started with Homyz</span>
          <span className="secondaryText">Subscribe and find super attractive price quotes from us.<br/>Find your residence soon</span>
          <button className="button">
            <a href="mailto:zainkeepscode@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
