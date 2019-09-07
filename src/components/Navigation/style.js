import styled from "styled-components";

export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  position: relative;
  z-index: 1;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);

  height: 5em;
  padding: 0.8em;
`;

export const Logo = styled.img`
  width: 8rem;
`;
