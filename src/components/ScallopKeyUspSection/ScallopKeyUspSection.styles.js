import styled from "styled-components";
import {
  rem,
  font,
  SiteTransition,
  xl,
  lg,
  md,
  sm,
  xs,
  dblack,
  GilroyBold,
} from "../../config/variables";

export const ScallopKeyUspSectionStyle = styled.section`
  width: 100%;
  padding: 0 0 ${rem(40)} 0;
  ${xl(`
    padding: 0 0 ${rem(40)} 0;
    margin-bottom: ${rem(85)};
  `)}
  ${lg(`
  padding: 0 0 ${rem(40)} 0;
    margin-bottom: ${rem(75)};
  `)}
  ${md(`
  padding: 0 0 ${rem(40)} 0;
    margin-bottom: ${rem(70)};
  `)}
  ${sm(`
  padding: 0 0 ${rem(40)} 0;
    margin-bottom: ${rem(50)};
  `)}
`;

export const ScallopUSPList = styled.div`
  display: flex;
  flex-flow: wrap;
  margin: 0 ${rem(-18)};
  ${lg(`
    margin: 0 ${rem(-12)};
  `)}
  ${md(`
    margin: 0 ${rem(-12)};
    flex-wrap: wrap;
  `)}
  ${xs(`
    margin: 0;
    flex-wrap: wrap;
  `)}
`;
export const ScallopUspBack = styled.div`
  backface-visibility: hidden;
  transform: rotateY(180deg);
  position: absolute;
  top: 3rem;
  padding-left: 2rem;
  height: 85%;
`;

export const ScallopUspFront = styled.div`
  backface-visibility: hidden;
`;

export const ScallopUspIcon = styled.img`
  position: absolute;
  bottom: 2rem;
  left: 1rem;
`;

export const ScallopUSP = styled.div`
  position: relative;
  border-radius: ${rem(8)};
  max-width: ${(props) => props.sWidth};
  width: 100%;
  height: 19rem;
  transition: ${SiteTransition};
  margin: 0 ${rem(12)} ${rem(18)} ${rem(12)};
  padding: ${rem(25)} ${rem(20)};
  transition: 0.6s;
  transform-style: preserve-3d;
  &:hover {
    transform: rotateY(180deg);
    box-shadow: 16px 16px 50px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
  &:nth-child(2) {
    margin-right: 0;
  }
  &:nth-child(5) {
    margin-right: 0;
  }
  &:nth-child(7) {
    margin-right: 0;
  }

  ${md(`
    margin: 20px ${rem(12)};
    padding: ${rem(25)} ${rem(20)};
    margin-bottom: ${rem(25)};  
    max-width: 100%; 
    &:nth-child(2) {
      margin: 0 ${rem(12)};
      margin-bottom:10px;
      max-width: 100%; 
    }
    &:nth-child(5) {
      margin: 0 ${rem(12)};
      max-width: 100%; 
    }
    &:nth-child(7) {
      margin: 0 ${rem(12)};
      max-width: 100%; 
    }

    &:hover{
      transform: none;
      box-shadow: 16px 16px 50px rgba(0, 0, 0, 0.1);
    }
    
  `)}
  ${xs(`
    margin: 15px 0;
    padding: ${rem(25)} ${rem(20)};
    margin-bottom: ${rem(25)};
    max-width: 100%;
    &:nth-child(2) {
      margin: 0;
      max-width: 100%; 
    }
    &:nth-child(5) {
      margin: 0;
      max-width: 100%; 
    }
    &:nth-child(7) {
      margin: 0;
      max-width: 100%; 
    }
    &:hover{
      transform: none;
      box-shadow: 16px 16px 50px rgba(0, 0, 0, 0.1);
    }

  `)}
`;

export const ScallopUSPBg = styled.div`
  background: linear-gradient(
    199.39deg,
    #00deca -22.49%,
    #3a8afa 86.04%,
    #1a6af4 264.64%
  );
  // padding: ${rem(49)} ${rem(36)};
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0.1;
  border-radius: 20px;
`;

export const ScallopUSPBgImg = styled.div`
  height: ${(props) => props.iHeight || "60%"};
  position: absolute;
  overflow: hidden;
  top: ${(props) => props.iTop || "auto"};
  right: ${(props) => props.iRight || "auto"};
  left: ${(props) => props.iLeft || "auto"};
  bottom: ${(props) => props.iBottom || "auto"};
  border-radius: 20px;
  & img {
    max-width: 100%;
    max-height: 100%;
    height: 100%;
  }
  ${md(`
      height: 70%;
      right: 0;
      left: auto;    
  `)}

  ${sm(`
      height: 55%;
      right: 0;
      left: auto;
  `)}
`;

export const ScallopUSPHead = styled.div`
  display: flex;
  margin-bottom: ${rem(16)};
  align-items: flex-start;
  ${sm(`
    margin-bottom: ${rem(10)};
  `)}
`;

export const ScallopUSPImg = styled.div`
  margin-right: ${rem(-40)};
  flex: 0 0 ${rem(150)};
  ${sm(`
    flex: 0 0 ${rem(100)};
    margin-right: ${rem(-20)};
  `)}
`;

export const ScallopUSPTitle = styled.div`
  ${font(rem(20), rem(27), "#162647")};
  font-family: ${GilroyBold};
  padding-top: ${rem(7)};
  ${md(`
    font-size: ${rem(18)};
    line-height: ${rem(25)};
  `)}
  ${sm(`
    font-size: ${rem(16)};
    line-height: ${rem(23)};
  `)}
`;

export const ScallopUSPContent = styled.div`
  ${font(rem(16), rem(22), "#8F92A1")};

  width: 80%;
  ${md(`
    font-size: ${rem(16)};
    line-height: ${rem(26)};
  `)}
  ${sm(`
    font-size: ${rem(14)};
    line-height: ${rem(24)};
  `)}
`;
