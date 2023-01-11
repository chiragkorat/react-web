import styled, { keyframes } from "styled-components";
import {
  black, font, rem, lgrey, dblack, GilroyExtraBold, md, xs, white, sm
} from "../../config/variables";

const MoveZ = keyframes`
	0% {
    transform: translate(0, 0);
	}
  50% {
    transform: translate(1px, -6px);
  }
  100% {
    transform: translate(0, 0);
  }
`

export const BannerStyle = styled.section`
  width: 100%;
  display: block;
  padding-top: ${rem(70)};
  margin-bottom: ${rem(42)};
  overflow-x: hidden;
  .container {
    max-width: 44rem;
  }
  ${md(`
    padding-top: ${rem(60)};
  `)}
  ${xs(`
    margin-bottom: ${rem(30)};
  `)}
`;

export const BannerHeading = styled.div`
  width: 100%;
`;

export const SubHeading = styled.h5`
  ${font(rem(18), rem(25), lgrey)};
  margin-bottom: ${rem(26)};
  text-transform: uppercase;
  ${md(`
    font-size: ${rem(16)};
    line-height: ${rem(23)};
  `)}
  ${xs(`
    font-size: ${rem(15)};
    line-height: ${rem(22)};
    margin-bottom: ${rem(15)};
  `)}
`;

export const Heading = styled.h1`
  color: ${black};
  margin-bottom: ${rem(26)};
  font-family: ${GilroyExtraBold};
  ${xs(`
    margin-bottom: ${rem(15)};
  `)}
  span{
    display: block;
    background: -webkit-linear-gradient(#00DECA, #1A6AF4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const SmallHeading = styled.h1`
  color: ${black};
  margin-bottom: ${rem(26)};
  font-family: ${GilroyExtraBold};
  font-size: 63px;
  line-height: 72px;
  ${md(`
  font-size: 50px;
  line-height: 35px;
`)}
${sm(`
font-size: 40px;
line-height: 35px;
    `)}
  
  ${xs(`
  font-size: 26px;
    margin-bottom: ${rem(15)};
  `)}
  span{
    // display: block;
    background: -webkit-linear-gradient(#00DECA, #1A6AF4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Para = styled.p`
  max-width: ${rem(781)};
  width: 100%;
  margin: 0 auto;
  color: ${dblack};
`;

export const BannerImg = styled.div`
  width: 100%;
  display: block;
  position: relative;
  ${md(`
    margin-top: ${rem(10)};
  `)}
  .imgw62{
    width:62px;
  }
  .bannerm{
    // display: none;
    align-items:center;
    width:100%;
    ${sm(`
      display: block;
      margin-top: ${rem(20)};
    `)}
  }
  img{
    
    &.hover-img{
      position: absolute;
      left: 25.5%;
      top: 8.5%;
      width: 47%;
		  transform: translate(1px, -6px);
      animation: ${MoveZ} 3s ease infinite;
      
    }
  }
`;

export const Figure = styled.figure`
  width: 100%;
  min-height: 200px;
  padding: 0;
  margin: 1rem 0 0 0;
`;


export const ExtraService = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05);
  background: radial-gradient(94.97% 146.26% at 6.28% 6.03%, rgba(255, 255, 255, 0.65) 0%, #FFFFFF 0.01%, #FFFFFF 100%);
  padding: ${rem(15)} ${rem(28)};
  max-width: ${rem(430)};
  width: 100%;
  margin: ${rem(15)} auto;
  border-radius: ${rem(16)};  
  ${sm(`
    flex-wrap: wrap;
    max-width: 100%;
    justify-content: center;
  `)}
  ${xs(`
  display: none;
  `)}
`;

export const Title = styled.div`
  ${font(rem(16), rem(25), '#4F4F4F')};
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  ${md(`
    font-size: ${rem(16)};
    line-height: ${rem(25)};
  `)}
  ${sm(`
    font-size: ${rem(14)};
    line-height: ${rem(22)};
  `)}
  strong{
    font-weight: 800;
  }
  div {
    width: 128px;
    display: flex;
    justify-content: space-evenly;
  }
`;

export const PlatformDownload = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  & .android {
    margin-top: -5px;
  }
`;

export const CountryFlag = styled.div`
  display: flex;
  align-items: center;
  ${sm(`
    margin-left: 0;
    margin-top: ${rem(10)};
    width: 100%;
    justify-content: center;
  `)}
  img{
    margin-left: ${rem(28)};
    ${sm(`
      display: flex;
      margin: 0 ${rem(10)};
    `)}
  }
`;