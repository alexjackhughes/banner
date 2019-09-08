import React from "react";
import { Animate, AnimateKeyframes } from "react-simple-animate";

const AnimationContainer = ({ play, children }) => (
  <Animate
    play={play}
    duration={0.3}
    delay={0.1}
    start={{
      transform: "translateY(0px)"
    }}
    end={{ transform: "translateY(-200px)" }}
  >
    <AnimateKeyframes
      play={play}
      delay={0.4}
      keyframes={[
        { 10: "transform: translate3d(-1px, 0, 0)" },
        { 20: "transform: translate3d(1px, 0, 0)" },
        { 30: "transform: translate3d(-2px, 0, 0)" },
        { 40: "transform: translate3d(2px, 0, 0)" }
      ]}
    >
      {children}
    </AnimateKeyframes>
  </Animate>
);

export default AnimationContainer;
