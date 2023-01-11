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
  subHeadingColor,
  SiteTransition,
  GilroyBold,
} from "../../config/variables";

export const ScallopChainSectionStyle = styled.section`
width: 100%;
position: relative;
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-right: 1.125rem;
}
`;

export const ScallopChainMainHeader = styled.h2`
h2 {
  ${font(rem(38), rem(45), black)};
  font-family: ${GilroyBold}; 
  margin-bottom: 0;
}
p {
  ${font(rem(20), rem(32), subHeadingColor)};
  margin-bottom: 1.5rem;
}
`;
export const ScallopSection = styled.div`
  margin: 0 ${rem(-18)};
  display: flex;
  ${lg(`
    margin: 0 ${rem(-12)};
  `)}
  ${md(`
    margin: 0 ${rem(-12)};
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
  `)}
  ${xs(`
    margin: 0;
    flex-wrap: wrap;
  `)}

  ul {
    ${md(`
    width: 100%;
    margin: 0 0.75rem;
    padding: 1.5625rem 1.25rem;
  `)}
  ${sm(`
    // margin: 0 0.75rem;
    padding: 1.5625rem 1.25rem;
    justify-content: space-between;
    width: 95%;
    flex-flow: wrap;
  `)}
  ${xs(`
  margin: 0;
  padding: 0;
  width: 100%;
  `)}
  }
`;

export const ScallopChainListItemStyle = styled.li`
  width: 254px;
  height: auto;
  position: relative;
  padding: 1.5rem 1rem;
  margin-bottom: 1.125rem;
  cursor: pointer;
  ${md(`
     width: 100%;
  `)}
`;

export const ScallopChainListItemPBg = styled.div`
  background: linear-gradient(
    199.39deg,
    rgba(0, 222, 202, 0.1) -22.49%,
    rgba(58, 138, 250, 0.1) 86.04%,
    rgba(26, 106, 244, 0.1) 264.64%
  );
  // padding: ${rem(49)} ${rem(36)};
  width: 100%;
  height: 100%;
  opacity: ${props => props.itemOpacity || '0.03'};
  border-radius: 20px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const ScallopUSPBg = styled.div`
  background: linear-gradient(
    199.39deg,
    #00deca -22.49%,
    #3a8afa 86.04%,
    #1a6af4 264.64%
  );
  opacity: 0.1;
  border-radius: 20px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const ScallopSectionDetail = styled.div`
  display: flex;
  position: relative;
  margin-left: 1.125rem;
  flex-direction: column;
  max-width: 48rem;
  padding: ${rem(15)} ${rem(20)};
  ${lg(`
    margin: 1.125rem 1.125rem;
  `)}
  ${md(`
    margin: 1.125rem ${rem(12)};
    padding: 3.5rem 1.5rem;
    flex-wrap: wrap;
    img {
      display: none;
    }
  `)}
  ${sm(`
  width: 100%;
`)}

  ${xs(`
    margin: 0;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
    img {
      display: none;
    }
  `)}
`;

export const ScallopChainListItemHeaderStyle = styled.h2`
  color: ${black};
  font-size: 16px;
  line-height: 1rem;
`;
export const ScallopChainListItemContentStyle = styled.p`
  font-size: 16px;
  color: ${subHeadingColor};
`;

export const ScallopChainUSPList = styled.div`
display: flex;
flex-flow: wrap;
margin: 1.6rem -1.125rem 0 -1.125rem;
${sm(`
margin: 0;
`)}
`;

export const ScallopUSPChain = styled.div`
position: relative;
  border-radius: 20px;
  max-width: ${props => props.sWidth};
  width: 100%;
  height: auto;
  padding: 1.5rem 0;
  margin: 0 ${rem(18)} ${rem(18)} 0;
  transition: ${SiteTransition};
  &:nth-child(2) {
    margin-right: 0;
  }
  &:nth-child(5) {
    margin-right: 0;
  }
  ${lg(`
    margin: 0 ${rem(12)};
    padding: ${rem(5)} ${rem(2)};
    margin-bottom: ${rem(25)};
    &:nth-child(2) {
      margin-right: 0;
    }
    &:nth-child(5) {
      margin-right: 0;
    }
  `)}
  ${md(`
    margin: 0 ${rem(12)};
    padding: ${rem(25)} ${rem(20)};
    margin-bottom: ${rem(25)};
    max-width: 100%;
  `)}
  ${xs(`
    margin: 0;
    padding: ${rem(25)} ${rem(20)};
    margin-bottom: ${rem(25)};
    max-width: 100%;
  `)}
  &:hover{
    box-shadow: 16px 16px 50px rgba(0, 0, 0, 0.1);
  }
`;

export const ScallopUSPChainBg = styled.div`
  background: linear-gradient(199.39deg, #00DECA -22.49%, #3A8AFA 86.04%, #1A6AF4 264.64%);
  // padding: ${rem(49)} ${rem(36)};
 position: absolute;
 top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
  border-radius: 20px;
  
`;

export const ScallopUSPChainBgImg = styled.div`
    height: ${props => props.iHeight || '60%'};
    position: absolute;
    overflow: hidden;
    top: ${props => props.iTop || 'auto'};
    right: ${props => props.iRight || 'auto'};
    left: ${props => props.iLeft || 'auto'};
    bottom: ${props => props.iBottom || 'auto'};
    border-radius: 20px;    
    & img {
      max-width: 100%;
      max-height: 100%;
      height: 100%;
    }
    ${md(`
      display: none;
    `)}

    ${sm(`
    height: 40%;
  `)}
  
  
`;

export const ScallopUSPChainHead = styled.div`
  display: flex;   
  margin-bottom: ${rem(16)};
  padding-left: 1.825rem;
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

export const ScallopUSPChainTitle = styled.div`  
  ${font(rem(20), rem(27), '#162647')};
  font-weight: 700;
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

export const ScallopUSPChainContent = styled.div`
  ${font(rem(16), rem(22), '#8F92A1')};
  padding: 1.7rem;
  width: 80%;
  padding-left: ${rem(29)};
  ${md(`
    font-size: ${rem(16)};
    line-height: ${rem(26)};
  `)}
  ${sm(`
    font-size: ${rem(14)};
    line-height: ${rem(24)};
  `)}
`;





