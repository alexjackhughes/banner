import React from "react";

import star from "../../assets/images/star.svg";
import pipe from "../../assets/images/pipe.svg";

function Banner({ visible, changeBanner }) {
  if (visible) {
    return (
      <div className="banner">
        <div className="edge" />
        <div className="main">
          <div className="banner-content">
            <img src={star} className="icon-star" alt="star-icon" />

            <div className="item align-right title-section top">
              <span className="bold title">Help us give more</span>
            </div>
            <img src={pipe} className="icon-pipe" alt="pipe" />
            <div className="item big top">
              <span className="bold">Answer 1 question</span> to guide what we
              build
            </div>
            <span className="button-group">
              <button className="item bold" onClick={() => changeBanner()}>
                Dismiss
              </button>
              <button className="item bold">I want to help</button>
            </span>
          </div>
        </div>
        <div className="edge" />
      </div>
    );
  }
  return null;
}

export default Banner;
