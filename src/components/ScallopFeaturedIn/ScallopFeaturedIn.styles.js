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

export const ScallopFeaturedInStyle = styled.section`
width: 100%;
position: relative;
margin: 3rem 0 9rem 0;
h2 {
  ${font(rem(38), rem(45), black)};
  font-family: ${GilroyBold}; 
  display: flex;
  justify-content: center;
  font-size: 38px;
  margin-bottom: 0;
}

p {
  color: ${subHeadingColor};
  display: flex;
  justify-content: center;
  font-size: 20px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0; 
}
`;

export const ScallopLeftShape = styled.div`
    shape-outside: polygon(0 0,0 80px,80px 80px);
    width: 35px;
    height: 73px;
    float: left;
    ${md(`
    display: none;
  `)}
`;

export const ScallopRightShape = styled.div`
    shape-outside: polygon(0 0,0 80px,80px 80px);
    width: 35px;
    height: 73px;
    float: left;

`;

export const ScallopFeaturedItems = styled.li`
margin: 1rem 0;
position: relative;

${md(`
display: flex;
flex-wrap: wrap;
`)}

button {
  border: 2px solid #1A6AF4;
  border-radius: 12px;
  color: #1A6AF4;
  background: transparent;                                              
  height: 38px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
 
}

`;

export const ScallopBrandImg = styled.div`
    display: flex;
    align-items: center;
    flex-wrap:wrap;
    justify-content: center;
    img {
      height: 80%;
      margin: 0 1.5rem;
    }
    ${md(`
    img {
      height: auto;
    }
  `)}
`;

export const ScallopModalOverlay = styled.div`
position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  opacity: 1;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ScallopFeatureModal = styled.div`
padding: 3.5rem 1.5rem;
background: #fff;
border-radius: 5px;
width: 85%;
position: relative;
transition: all 5s ease-in-out;

${sm(`
margin: 5rem auto;
width: 100%;
height: 22rem;
    overflow-y: scroll;
`)}

button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
}

h2{
  color: ${black};
  font-size: 38px;
  display: flex;
  justify-content: center;
}

ul {
  list-style: none;


}
`






