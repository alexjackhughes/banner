import React from "react";
import styled from "styled-components";

import logo from "../../assets/images/tumelo.svg";

const Navbar = styled.div`
  height: 5em;
  background-color: white;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: row;
  justify-content: space-between
  padding: 0.8em;
`;

const Navigation = ({ visible, changeBanner }) => (
  <Navbar>
    <img src={logo} style={{ width: "8rem" }} alt="Tumelo logo" />
    {!visible ? (
      <button onClick={() => changeBanner()}>View Banner?</button>
    ) : null}
  </Navbar>
);

export default Navigation;
