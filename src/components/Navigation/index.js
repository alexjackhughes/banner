import React from "react";

import { Navbar, Logo } from "./style";
import { PrimaryButton } from "../App/style";

import tumelo from "../../assets/images/tumelo.svg";

const Navigation = ({ visible, changeBanner }) => (
  <Navbar>
    <Logo src={tumelo} alt="Tumelo logo" />
    {!visible ? (
      <PrimaryButton onClick={() => changeBanner()}>View Banner?</PrimaryButton>
    ) : null}
  </Navbar>
);

export default Navigation;
