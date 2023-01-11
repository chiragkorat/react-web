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
} from "../../config/variables";

export const ScallopChainMarqueeStyle = styled.section`
  width: 100%;
  position: relative;
  margin-top: -11rem;
  background: ${white};
  padding: 2rem 0;

  ul {
    list-style: none;
    padding: 0;
    margin: 2rem 0;
    display: flex;
  }
`;

export const ScallopMarqueeItemStyle= styled.li`
background: ${white};
box-shadow: 0px 15px 77px rgba(97, 97, 97, 0.16);
border-radius: 15px;
display: flex;
justify-content: center;
align-items: center;
max-width: ${props => props.sWidth || '100%'};
flex-direction: ${props => props.direction || 'row'};
padding: 1.125rem 2rem;
margin: 0 1.5rem;
p {
  font-size: 16px;
  padding: 1rem 3rem;
}
`;

export const ScallopDownloadIcons = styled.div`
margin-top: 3rem;
  
`;

export const ScallopBankingCardElite = styled.div`
 
`;

export const ScallopBankingCardContent = styled.div`
  
`;
