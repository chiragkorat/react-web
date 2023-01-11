import "../assets/fonts/fonts.css";

export const rem = (pxValue) => {
  const ratio = 16;
  return pxValue / ratio + "rem";
};

// fonts variable
export const PrimaryFont = "Gilroy-Regular";
export const GilroyMedium = "Gilroy-Medium";
export const GilroyBold = "Gilroy-Bold";
export const GilroyExtraBold = "Gilroy-ExtraBold";
export const DMSansMedium = "DMSans-Medium";

// color variables
export const primary = "#1164F4";
export const dblack = "#0D152E";
export const lblack = "#2C2E36";
export const white = "#fff";
export const mblack = "#272727";
export const borderblack = "#519EFB";
export const black = "#000";
export const grey = "#8B959E";
export const lgrey = "rgba(139, 149, 158, 0.6)";
export const lblue = "#E5F1FF";
export const green = "#2DCA8C";
export const lgreen = "#EAFAF3";
export const headblue = "#1A6AF4";
export const subHeadingColor = "#8F92A1";
export const eliteBg = "#030319";
export const basicCardBorder = "#e6e6e8";
export const footerLinks= "#f7f7f799";
export const darkBg = "#030319";

// site transition
export const SiteTransition = "all 0.2s ease-in-out";

export const font = (
  fsize = null,
  lheight = null,
  color = null,
  ffamily = PrimaryFont
) => {
  return `
    font-size : ${fsize};
    line-height : ${lheight};
    color : ${color};
    font-family : ${ffamily};
  `;
};

export const customScroll = () => `
  &::-webkit-scrollbar {
    width: ${rem(4)};
    height: ${rem(4)};
  }
  &::-webkit-scrollbar-thumb {
    background-color: #8B959E;
    border-radius: ${rem(2)};
  }
`;

/* media queries */
export const xxs = (content) => `
@media (max-width: 405px) {
  ${content};
}
`;
export const xs = (content) => `
@media (max-width: 541px) {
  ${content};
}
`;
export const sm = (content) => `
@media (max-width: 767px) {
  ${content};
}
`;
export const md = (content) => `
@media (max-width: 991px) {
  ${content};
}
`;
export const lg = (content) => `
@media (min-width: 992px) and (max-width: 1199px) {
  ${content};
}
`;
export const xl = (content) => `
@media (min-width: 1200px) and (max-width: 1440px) {
  ${content};
}
`;
export const device = (content) => `
@media (max-width: 1024px) {
  ${content};
}
`;
export const sh = (content) => `
@media (min-width: 1200px) and (max-width: 1440px) and (max-height: 850px) {
  ${content};
}
`;
/* media queries */
