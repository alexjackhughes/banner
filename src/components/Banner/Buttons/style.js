import styled from "styled-components";

import { FlexContainer } from "../style";

export const ButtonSection = styled(FlexContainer)`
  flex-basis: 100%;
  margin-bottom: 1vh;

  @media all and (min-width: 0px) and (max-width: 845px) {
    justify-content: flex-end;
  }
`;
