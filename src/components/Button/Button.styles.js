import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  rem,
  mblack,
  SiteTransition,
  white,
  primary,
  font,
  md
} from "../../config/variables";

export const ButtonStyle = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  font-weight: 700;
  position: relative;
  border-radius: ${rem(5)};
  overflow: hidden;
  padding: 0 1px 1px 0;
  transition: ${SiteTransition};
  span{
    background: ${primary};
    padding: ${rem(13)};
    display: block;
    position: relative;
    border-radius: ${rem(5)};
    ${font(rem(16), rem(21), white)};
    transition: ${SiteTransition};
    z-index: 1;
    ${md(`
      padding: ${rem(11)} ${rem(35)};
      ${font(rem(15), rem(20), white)};
    `)}
  }
  &:before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: 0;
    border-radius: inherit; /* !important√© */
    background: linear-gradient(to right, #1164F4, #519EFB);
  }
  // &:hover {
  //   text-decoration: none;
  //   span{
  //     background: ${primary};
  //   }
  }
`;
