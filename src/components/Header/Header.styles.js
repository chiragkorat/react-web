import styled from "styled-components";
import {
  rem,
  white,
  lg,
  md,
  sm,
  xs,
  xxs,
  SiteTransition,
  black,
  font,
  grey,
  dblack,
  customScroll,
  headblue,
  lblue,
  lgrey,
} from "../../config/variables";

export const DownloadButton = styled.button`
  background: transparent;
  color: #1a6af4;
  border: none;
  font-size: 18px;
  margin-left: 1.8rem;
  display: flex;
  align-items: center;
  img {
    margin-left: 0.5rem;
  }
`;

export const ScanDownloadImg = styled.img`
  position: absolute;
  top: 4rem;
  right:28rem;

  ${md(`
  bottom: 3rem;
  top: auto;
  right: 13rem;
  `)}

  ${sm(`
  bottom: 3rem;
  top: auto;
  right: 0;
  `)}
`;

export const HeaderStyle = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 99;
  background: #fcfbfc;
  height: 72px;
  border-bottom: 2px solid #efefef;

  .headerInner {
    position: relative;
  }
 

  ${sm(`
    padding: ${rem(15)} 0;
  `)}
  
`;

export const Wrapper = styled.div`
  display: flex;  
  align-items: center;

  ${md(`
    justify-content: space-between;
`)}
`;

export const Logo = styled.div`
  max-width: ${rem(248)};
  width: 100%;
  ${md(`
    max-width: ${rem(150)};
    margin-top: ${rem(8)};
  `)}
  ${sm(`
    max-width: ${rem(130)};
  `)}
  ${xxs(`
    max-width: ${rem(115)};
    margin-top: ${rem(2)};
  `)}
  a {
    display: block;
    img {
      display: block;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  
  align-items: center;
  ${md(`
    display: none;
  `)}
`;

export const MenuList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  margin-right: ${rem(131.2)};
  ${lg(`
    margin-right: ${rem(70)};
  `)}
`;

export const SubMenuList = styled.div`
  width: 30%;
  &:nth-child(3){
    background:#E5F1FF;
    padding:10px 20px;;
    border-radius:12px;
    width: 38%;
  }
  ${sm(`
    width: 100%;
    &:nth-child(3){
      padding: 8px 0;
      background: #fff;
      width: 100%;
    }

  `)}
`;

export const SubMenuPopOver = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  opacity: 0;
transform-origin: center -20px;
  transform: rotateX(-15deg);
  transition: transform 0.3s, opacity 0.3s;
  &.open {
    opacity: 1;
    transform: rotateX(0);
  }
`;

export const SubMenuContent = styled.div`
  position: absolute;
  display: none;
  overflow: hidden;
  z-index: 1;
  top: 2.2rem;
  left: 0rem;
  transition: transform 0.3s, opacity 0.3s;
  border-radius: ${rem(10)};
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
`;

export const SubMenu = styled.div`
  position: absolute;
  width: ${rem(1110)};
  padding: ${rem(24)};
  display: flex;
  opacity: 0;
  pointer-events: auto;
  background: ${white};
  &.products {
    // left: 17rem;
    // width: 68rem;
  }
  &.active {
    opacity: 1;
    z-index: 999;
    width: 100%;
  }
}
&.about, &.resources, &.contactUs {
  //width: ${rem(225)};
  ${SubMenuList}{
    width: 100%;
  }
}
  ${md(`
    padding: ${rem(15)} ${rem(20)};
    ${font(rem(15), rem(20), white)};
  `)}
  
`;



export const SubMenuArrow = styled.div`
  position: absolute;
  top: 1.46rem;
    left: 0;
    width: 30px;
    height: 30px;
  margin-left: -6px;
  background: #fcfbfc;
  box-shadow: -3px -3px 5px rgba(80, 90, 120, 0.05);
  border-radius: 4px 0 0 0;
  transform: rotate(45deg);
  transition: transform 0.3s, opacity 0.3s;
  will-change: transform;
`;

export const MenuItem = styled.li`
  margin: 0 ${rem(20)};
  list-style: none;
  display: flex;
  align-items: center;
  position: relative;
  ${lg(`
    margin: 0 ${rem(15)};
  `)}
  ${md(`
    margin: 0 ${rem(10)};
  `)}
`;

export const ItemLink = styled.a`
  ${font(rem(16), rem(18), "#1A1D1F")};
  font-weight: normal;
  transition: ${SiteTransition};
  display: flex;
  line-height: 0.125rem;
  align-items: center;
  padding: ${rem(36)} 0;
  ${md(`
    padding: ${rem(25)} 0;
  `)}
  .menu-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: ${rem(8)};
  }
`;
export const SubMenuListTitle = styled.div`
  display: flex;
  align-items: center;
  ${font(rem(10), rem(18), grey)};
  font-weight: 600;
  // text-transform: uppercase;
  // margin-bottom: ${rem(23)};
`;

export const SubMenuListIcon = styled.div`
  max-width: ${rem(24)};
  margin-right: ${rem(8)};
  img {
    display: block;
  }
`;

export const SubMenuListWrap = styled.ul`
  display: block;
`;

export const SubMenuListMenu = styled.div`
  // margin-bottom: ${rem(30)};
  padding: 10px;
  &:hover {
    background: #e5f1ff;
    border-radius: 12px;
    max-width: 90%;
  }
  &:last-child {
    margin-bottom: 0;
  }
  ${sm(`
  padding:9px 0px;
  `)}
`;

export const SubMenuItem = styled.a`
  ${font(rem(16), rem(18), grey)};
  font-weight: 500;
  display: block;
  transition: ${SiteTransition};

  img {
    margin-right: 0.5rem;
  }

  &:hover {
    color: ${black};
  }
`;
export const MobileMenu = styled.div`
  display: none;
  ${sm(`
    display: flex;
  `)}
  ${md(`
    display: flex;
  `)}
`;

export const MobileButton = styled.div`
  width: ${rem(24)};
  height: ${rem(20)};
  border-radius: ${rem(5)};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${rem(15)};
  cursor: pointer;
  span {
    position: absolute;
    width: ${rem(24)};
    height: ${rem(2)};
    border-radius: ${rem(2)};
    background: ${black};
    &:before {
      content: "";
      position: absolute;
      width: ${rem(24)};
      height: ${rem(2)};
      border-radius: ${rem(2)};
      background: ${black};
      left: 0;
      top: ${rem(-7)};
    }
    &:after {
      content: "";
      position: absolute;
      width: ${rem(24)};
      height: ${rem(2)};
      border-radius: ${rem(2)};
      background: ${black};
      left: 0;
      bottom: ${rem(-7)};
    }
  }
`;

export const MobileMenuWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: ${white};
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  transform: translateX(-100%);
  transition: all 0.3s cubic-bezier(0.3, 0.4, 0.7, 1);
  &.open {
    transform: translateX(0);
  }
`;

export const MobileHeader = styled.div`
  padding: ${rem(15)} ${rem(15)};
  background: ${white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const CloseButton = styled.div`
  width: ${rem(42)};
  height: ${rem(32)};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${rem(13)};
  cursor: pointer;
  &:before {
    content: "";
    position: absolute;
    width: ${rem(24)};
    height: ${rem(2)};
    border-radius: ${rem(2)};
    background: ${black};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:after {
    content: "";
    position: absolute;
    width: ${rem(24)};
    height: ${rem(2)};
    border-radius: ${rem(2)};
    background: ${black};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

export const Mobilecontent = styled.div`
  flex: 1;
  overflow: auto;
  ${customScroll};
  ${MenuList} {
    display: block;
    padding: ${rem(30)} ${rem(20)};
    margin: 0;
    height: 100%;
  }
  ${MenuItem} {
    margin: 0;
    padding: 0;
    display: block;
    padding-bottom: ${rem(15)};
    &:last-child {
      border: 0;
    }
  }
  ${ItemLink} {
    ${font(rem(16), rem(24), dblack)};
    padding: 0;
    &:after,
    &:before {
      display: none;
    }
    &.active + {
      ${SubMenu} {
        display: flex;
        flex-wrap: wrap;
      }
    }
  }
  ${SubMenu} {
    position: static;
    opacity: 1;
    visibility: visible;
    box-shadow: inherit;
    max-width: 100%;
    width: 100%;
    left: 0;
    transform: initial;
    margin: 0;
    display: none;
    padding: ${rem(20)} 0;
  }

  ${SubMenuListMenu} {
    // margin-bottom: ${rem(15)};
  }
`;

export const EarlyWrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  padding: ${rem(10)};
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

export const SCLPChain = styled.div`
  display: flex;
  margin-left: -${rem(120)};
  width: ${rem(1500)};
  height: 20%;
  padding-top: ${rem(10)};
  cursor: pointer;
  align-items: center;
  justify-content: center;
  // background: ${headblue};
  background: linear-gradient(to right, #1164f4, #519efb);

  ${lg(`

  `)}
  ${md(`
  margin-left:-${rem(0)};
  width: 100%
  `)}
  ${sm(`
  margin-left:-${rem(0)};
  width: 100%
    
  `)}
`;

export const SCLPChainText = styled.h5`
  ${font(rem(14), rem(16), white)};
  align-item: center // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
    ${lg(`

  `)} ${md(`
    font-size: ${rem(16)};
    line-height: ${rem(18)};
  `)} ${sm(`
    font-size: ${rem(8)};
    line-height: ${rem(14)};
    
  `)};
`;
