import React from "react";

import star from "../../assets/images/star.svg";
import pipe from "../../assets/images/pipe.svg";

import AnimationContainer from "./AnimationContainer";
import Title from "./Title";
import Subtitle from "./Subtitle";
import Buttons from "./Buttons";

import { BannerContainer, BannerContent, Icon, DesktopOnlyIcon } from "./style";

const Banner = ({ visible, changeBanner }) => (
  <AnimationContainer play={!visible}>
    <BannerContainer>
      <BannerContent>
        <Icon src={star} alt="star icon" />
        <Title />
        <DesktopOnlyIcon src={pipe} alt="pipe icon" />
        <Subtitle />
        <Buttons changeBanner={changeBanner} />
      </BannerContent>
    </BannerContainer>
  </AnimationContainer>
);
export default Banner;
