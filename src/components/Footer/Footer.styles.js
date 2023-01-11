import styled from "styled-components";
import {
  rem,
  white,
  SiteTransition,
  font,
  grey,
  black,
  primary,
  mblack,
  xl,
  lg,
  md,
  sm,
  xs,
  footerLinks,
  darkBg
} from "../../config/variables";

export const FooterStyle = styled.footer`
  background: ${darkBg};
  color: ${footerLinks};
  padding: ${rem(74)} 0 ${rem(20)};
  position: relative;
  
  p {
    font-size: 14px;
    padding: 1rem 0;
    margin: 0 auto;
    width: 98%;
  }
`;

export const FooterLinksSection = styled.div`
display: flex;
flex-flow: wrap;
`;

export const FooterMainLink = styled.li`
display: flex;
font-size: 16px;
padding: 0.5rem 0;
`;

export const FooterMain = styled.div`
  display: flex;
  align-items: flex-start;
  ${sm(`
    flex-wrap: wrap;
  `)}
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  width: 19.5%;
  h5 {
    font-size: 20px;
    font-weight: normal;
    color: ${white};
  }
  &:first-child {
    margin-left: 1rem;
  }
  &:last-child {
    padding-left: 2rem;
  }
  ${sm(`
  margin: 0 1rem;
  `)}
`;

export const FooterHorizontal = styled.div`
display: flex;
padding-bottom: 1rem;
flex-wrap: wrap;
margin: 0.85rem auto;
width: 98%;
ul {
    flex-wrap: wrap;
    width: 55%;
    display: flex;
    list-style: none;
    font-size: 14px;
    line-hight:22px;
    li {
      margin: 0.5rem 1.2rem;
    }
    ${sm(`
    width: 90%;
  `)}
}


`;
export const FooterCountryFlag = styled.div`
display: flex;
width: 40%;
margin-bottom: 1rem;
span {
  margin-left: 0.5rem;
  font-size: 14px;
}
img {
  height: 2rem;
}

${sm(`
width: 90%; 
`)}
`;

export const FooterDivider = styled.div`
background: rgba(143, 146, 161, 0.4);
transform: matrix(1, 0, 0, -1, 0, 0);
width: 100%;
height: 0.1rem;
`

export const FooterFlexStyle = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
`

