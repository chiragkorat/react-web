import styled from "styled-components";
import {
  font,
  rem,
  primary,
  black,
  subHeadingColor,
  GilroyBold,
} from "../../config/variables";

export const ScallopBankingSectionStyle = styled.section`
  width: 100%;
  position: relative;
  h2 {
    font-family: ${GilroyBold};
    ${font(rem(38), rem(45), black)};
    margin-bottom: 0
  }
  p {
    ${font(rem(20), rem(32), subHeadingColor)};
    margin-bottom: 0;
    width: 64%;
  }
`;

export const ScallopBankingSectionImg = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.7rem;
  // max-width: 60rem;
`;