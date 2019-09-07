import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  background-color: #3a3c62;
  border-radius: 0 0 1em 1em;
`;

export const FlexContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: baseline;
`;

export const BannerContent = styled(FlexContainer)`
  flex-grow: 1;
  margin: 1em;
  margin-left: 10vw;
  margin-right: 10vw;

  @media all and (min-width: 0px) and (max-width: 845px) {
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
  }
`;

export const ButtonSection = styled(FlexContainer)`
  flex-basis: 100%;
  margin-bottom: 1vh;

  @media all and (min-width: 0px) and (max-width: 845px) {
    justify-content: flex-end;
  }
`;

export const Icon = styled.img`
  height: 3em;
  width: auto;
  align-self: center;
`;

export const DesktopOnlyIcon = styled(Icon)`
  @media all and (min-width: 0px) and (max-width: 845px) {
    display: none;
  }
`;
