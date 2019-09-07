import React from "react";

import { Navbar, Logo } from "./style";
import tumelo from "../../assets/images/tumelo.svg";

const Navigation = ({ visible, changeBanner }) => (
  <Navbar>
    <Logo src={tumelo} alt="Tumelo logo" />
    {!visible ? (
      <button onClick={() => changeBanner()}>View Banner?</button>
    ) : null}
  </Navbar>
);

export default Navigation;
