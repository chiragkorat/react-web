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

export const ScallopUSPFront = styled.div`
backface-visibility: hidden;

`;

export const ScallopUSPBack = styled.div`
backface-visibility: hidden;
transform: rotateY(180deg);
position: absolute;
top: 0;
left: 0;
height: 100%;

`;

export const ScallopUspIcon = styled.img`
position: absolute;
bottom: 0.5rem;
left: 1rem;
${xl(`
bottom: 12px;
left: 12px;
`)}

${lg(`
bottom: 12px;
left: 12px;
`)}

${md(`
bottom: 12px;
left: 12px;
`)}

${sm(`
bottom: 12px;
left: 12px;
`)}

${xs(`
bottom: 12px;
left: 12px;
`)}
`;
export const ScallopChainWhySectionStyle = styled.section`
width: 100%;
position: relative;
margin-bottom: 7rem;

h2 {
  ${font(rem(38), rem(45), black)};
  font-family: ${GilroyBold};
  margin-bottom: 0;
}
p {
 font-size: 20px;
  color: ${subHeadingColor}
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-right: 1.125rem;
}
`;
export const ScallopSection = styled.div`
  // margin: 0 ${rem(-18)};
  display: flex;
  // width: 87%;
  ${lg(`
    margin: 0 ${rem(-12)};
  `)}
  ${md(`
    margin: 0 ${rem(-12)};
    flex-wrap: wrap;
    width: 100%;
  `)}
  ${xs(`
    margin: 0;
    flex-wrap: wrap;
    width: 100%;
  `)}
`;

export const ScallopChainListItemStyle = styled.li`
  width: 254px;
  height: auto;
  position: relative;
  padding: 1.5rem 1rem;
  margin-bottom: 1.125rem;
`;

export const ScallopChainListItemPBg = styled.div`
  background: linear-gradient(
    199.39deg,
    rgba(0, 222, 202, 0.1) -22.49%,
    rgba(58, 138, 250, 0.1) 86.04%,
    rgba(26, 106, 244, 0.1) 264.64%
  );
  // padding: ${rem(49)} ${rem(36)}; 
  opacity: 0.03;
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
  margin-left: 0;
  margin-top: 1rem;
  flex-direction: column;
  padding: ${rem(25)} ${rem(20)} ${rem(0)} ${rem(20)};  
  
  ${lg(`
    margin: 0 1.125rem 1.125rem 1.125rem;
    margin-left:0;
    .detailImg {
      height: 20%;
    }
  `)}
  ${md(`
    margin: 1.125rem ${rem(-12)};
    flex-wrap: wrap;
    padding: 1.5625rem 1.25rem;
    margin-left: 0;
   
  `)}
  ${xs(`
    margin: 0;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
    
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

// margin: 0 -1.125rem;
export const ScallopChainUSPList = styled.div`
display: flex;
flex-flow: wrap;
${lg(`
    justify-content: flex-start;
`)}
${sm(`
margin:0;
`)}
`;

export const ScallopUSPChain = styled.div`
position: relative;
  border-radius: 20px;
  max-width: ${props => props.sWidth};
  width: 100%;
  height: auto;
  padding: 1.5rem 0;
  margin: ${rem(8)};
  transition: ${SiteTransition};
  transform-style: preserve-3d;
  &:hover{
		transform: rotateY(180deg);
    box-shadow: 16px 16px 50px rgba(0, 0, 0, 0.1);
    cursor : pointer;
  }
  ${lg(`
    margin: 0 ${rem(12)};
    padding: ${rem(5)} ${rem(2)};
    margin-bottom: 1.5rem;
  `)}
  ${md(`
    margin: 0 ${rem(28)};
    padding: ${rem(25)} ${rem(20)};
    margin-bottom: ${rem(25)};
    max-width: 100%;
    &:hover{
      transform: none;
    }
  `)}
  ${xs(`
    margin: 0;
    padding: ${rem(25)} ${rem(20)};
    margin-bottom: ${rem(25)};
    max-width: 100%;
    &:hover{
      transform: none;
    }
  `)}
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
      height: 50%;
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





