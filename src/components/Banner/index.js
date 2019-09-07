import React from "react";
import { Animate } from "react-simple-animate";

import star from "../../assets/images/star.svg";
import pipe from "../../assets/images/pipe.svg";

import Title from "./Title";
import Subtitle from "./Subtitle";
import Buttons from "./Buttons";

import { BannerContainer, BannerContent, Icon, DesktopOnlyIcon } from "./style";

function Banner({ visible, changeBanner }) {
  return (
    <Animate
      play={!visible}
      duration={0.3}
      delay={0.1}
      start={{
        transform: "translateY(0px)"
      }}
      end={{ transform: "translateY(-200px)" }}
    >
      <BannerContainer>
        <BannerContent>
          <Icon src={star} alt="star icon" />
          <Title />
          <DesktopOnlyIcon src={pipe} alt="pipe icon" />
          <Subtitle />
          <Buttons changeBanner={changeBanner} />
        </BannerContent>
      </BannerContainer>
    </Animate>
  );
}

export default Banner;
