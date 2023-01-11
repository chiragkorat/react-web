import styled from "styled-components";
import { images } from "../../config/images";
import {
  black,
  font,
  GilroyBold,
  lg,
  md,
  rem, sm, white,
} from "../../config/variables";


export const ExpandSectionStyle = styled.section`
  width: 100%;
  position: relative;
  div {
    display: flex;
    justify-content: center;
  }
  
`;



export const ScallopSuperAppContainer = styled.div`

border: 3px solid #1A6AF4;
border-radius: 50%;
width: 700px;
height: 700px;
padding: 4rem;
${md(`
height:500px;
width:500px;
`)}
`;

export const ScalopSuperApp = styled.div`

border: 3px solid #1A6AF4;
border-radius: 50%;
width: 600px;
height: 600px;
background: radial-gradient(50% 50% at 50% 50%, #FFFFFF 89.25%, #DAE7FF 100%);
${md(`
height:375px;
width:375px;
`)}
`;

export const ScallopSuperAppContent = styled.div`
align-items: center;
width: 100%;
flex-direction: column;



`;

export const Heading = styled.div`
 
`;

export const H2 = styled.h2`

background: linear-gradient(90deg, #6553F0 0%, #CE7DF4 49.59%, #F3AC94 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-size: 38px;
line-height: 45px;
font-family: ${GilroyBold}; 
`;

export const Content = styled.p`
  color: ${black};
  font-size: 20px;
  width: 53%;
  margin: 0;
`;

export const ExpandWrapper = styled.div`
  
`;

export const GlobeImg = styled.figure`

`;