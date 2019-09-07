import React from "react";

import { Button } from "../../App/style";
import { ButtonSection } from "./style";

const Buttons = ({ changeBanner }) => (
  <ButtonSection>
    <Button onClick={() => changeBanner()}>Dismiss</Button>
    <Button>I want to help</Button>
  </ButtonSection>
);

export default Buttons;
