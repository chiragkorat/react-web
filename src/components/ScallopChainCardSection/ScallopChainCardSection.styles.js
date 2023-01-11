import styled from "styled-components";
import {
  rem,
  font,
  xl,
  lg,
  md,
  sm,
  xs,
  black,
  white,
  eliteBg,
  basicCardBorder,
  subHeadingColor,
  SiteTransition,
  GilroyBold,
} from "../../config/variables";

export const ScallopChainCardSectionStyle = styled.section`
  width: 100%;
  position: relative;
  margin-top: 1.75rem;
  h2 {
      ${font(rem(38), rem(45), black)};
      font-family: ${GilroyBold};
      margin-bottom: 0;
  }
  p {
    font-size: 20px;
    color: ${subHeadingColor};
    margin:2.5rem ;
  }
  
`;

export const ScallopChainCards = styled.div`
  display: flex;
  justify-content:center;
  margin-bottom: 3.8rem;
  flex-wrap: wrap;
`;

export const ScallopBankingCardBasic = styled.div`
  border-radius: 20px;
  width: 42%;
  height: 695px;
  border: 2px solid ${basicCardBorder};
  position: relative;
  Button {
    background: ${eliteBg};
    border-radius: 88px;
    color: ${white};
    width: 140px;
    height: 46px;
    margin: 1.125rem 0;
  }
  p{color: ${black};}
  ul {
    color: ${subHeadingColor};
    padding: 1.125rem;
  }
  img {
    height: 40%;
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 10px;
  }
  ${lg(`
    width: 48%;
  `)}
  ${md(`
    width: 100%;
    margin-right: 0;
    margin-bottom: 1.5rem;
  `)}

  ${xs(`
    margin-right: 0;
    margin-bottom: 1.5rem;
  `)}
`;

export const ScallopBankingCardElite = styled.div`
  background: ${eliteBg};
  border-radius: 20px;
  width: 42%;
  height: 695px;
  margin-left: 1.125rem;
  color: ${white};
  position: relative;
  Button {
    background: ${white};
    border-radius: 88px;
    color: ${black};
    width: 140px;
    height: 46px;
    margin: 1.125rem 0;
  }

  p{color: ${white};}

  ul {
    padding: 1.125rem;
  }
  img {
    height: 40%;
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 10px;
  }

  ${lg(`
    width: 48%;
  `)}

  ${md(`
    width: 100%;
    margin-left: 0;
  `)}

  ${xs(`
    margin-left: 0;
  `)}
`;

export const ScallopBankingCardContent = styled.div`
  display: flex;
  padding: 1.8rem;
  flex-direction: column;
  margin: 1.8rem 0;
`;
