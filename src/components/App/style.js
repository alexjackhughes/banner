import styled from "styled-components";

export const Button = styled.button`
  all: unset;
  cursor: pointer;
  font-weight: 800;
  font-family: "Montserrat-Bold", sans-serif;
  color: white;

  font-size: 13pt;
  padding: 0.25em 1em;
`;

export const PrimaryButton = styled(Button)`
  background-color: #ff4082;
  border: 2px solid #ff4082;
  border-radius: 30px;

  margin: 1em;
`;
