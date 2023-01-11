import React from "react";
import { images } from "../../config/images";
import {
  ScallopChainWhySectionStyle,
  ScallopSection,
  ScallopChainListItemStyle,
  ScallopSectionDetail,
  ScallopChainListItemHeaderStyle,
  ScallopChainListItemContentStyle,
  ScallopChainUSPList,
  ScallopChainListItemPBg,
  ScallopUSPChain,
  ScallopUSPChainBg,
  ScallopUSPChainBgImg,
  ScallopUSPChainHead,
  ScallopUSPChainTitle,
  ScallopUSPChainContent,
  ScallopUSPFront,
  ScallopUSPBack,
  ScallopUspIcon
} from "./ScallopChainWhySection.styles";
import {
  ScallopUSPHead,
  ScallopUSPTitle,
  ScallopUSPContent,
  ScallopUSPBg,
  ScallopUSPBgImg,
} from "../ScallopKeyUspSection/ScallopKeyUspSection.styles";

const chainValues = [
  {
    title: "One Account",
    image: images.scallopBank,
    alt: "one Account",
    sWidth: "35%",
    content: "Store your crypto and fiat in one place, so you can spend them just as easily",
    iHeight: "45%",
    iTop: "",
    iBottom: "0",
    iRight: "0",
    icon: images.plus,
    back: {
      content: "Lorem ipsum lorem ipsum lorem ipsum.  Lorem ipsum lorem ipsum lorem ipsum.  Lorem ipsum lorem ipsum lorem ipsum. ",
      icon: images.minus
    }
  },
  {
    title: "Insured Account",
    image: images.scallopShield,
    alt: "cards",
    sWidth: "60%",
    content: "You're covered by insurance if anything happens to your account—and if it happens, we'll take care of it!",
    iHeight: "55%",
    iTop: "",
    iBottom: "0",
    iRight: "0",
    icon: images.plus,
    back: {
      content: "Lorem ipsum lorem ipsum lorem ipsum.  Lorem ipsum lorem ipsum lorem ipsum.  Lorem ipsum lorem ipsum lorem ipsum. ",
      icon: images.minus
    }
  },
  {
    title: "Everything money",
    sWidth: "59%",
    content: "A tailor made solution for all your investment needs in traditional finance, crypto, or both!",
    image: images.support,
    iHeight: "45%",
    iTop: "",
    iBottom: "10px",
    iRight: "20px",
    icon: images.plus,
    back: {
      content: "Lorem ipsum lorem ipsum lorem ipsum.  Lorem ipsum lorem ipsum lorem ipsum.  Lorem ipsum lorem ipsum lorem ipsum. ",
      icon: images.minus
    }
  },
  {
    title: "Secure",
    sWidth: "36%",
    image: images.scallopAuthentic,
    content: "You will never have to worry about fraud or theft with our highly secure services",
    iHeight: "45%",
    iTop: "",
    iBottom: "10px",
    iRight: "8px",
    icon: images.plus,
    back: {
      content: "Lorem ipsum lorem ipsum lorem ipsum.  Lorem ipsum lorem ipsum lorem ipsum.  Lorem ipsum lorem ipsum lorem ipsum. ",
      icon: images.minus
    }
  }
];

const ScallopChainWhySection = () => {
  return (
    <ScallopChainWhySectionStyle className="ScallopFutureBanking" >
      <div className="container">
        <h2>Why scallop?</h2>
        <p>The Future of Banking is here!</p>
        <ScallopSection>
          <ScallopChainUSPList>
            {chainValues.map((chainValue, i) => {
              return (
                <ScallopUSPChain key={i} sWidth={chainValue.sWidth} className="box-margin">
                  <ScallopUSPChainBg></ScallopUSPChainBg>
                  <ScallopUSPFront>
                    <ScallopUSPChainBgImg
                      iHeight={chainValue.iHeight}
                      iTop={chainValue.iTop}
                      iBottom={chainValue.iBottom}
                      iRight={chainValue.iRight}
                      iLeft={chainValue.iLeft}
                    >
                      <img src={chainValue.image} alt={chainValue.alt}/>
                    </ScallopUSPChainBgImg>
                    <ScallopUSPChainHead>
                      <ScallopUSPChainTitle>
                        {chainValue.title}
                      </ScallopUSPChainTitle>
                    </ScallopUSPChainHead>
                    <ScallopUSPChainContent>
                      {chainValue.content}
                    </ScallopUSPChainContent>
                    {chainValue.icon && 
                      <ScallopUspIcon src= {chainValue.icon} alt= "plus"></ScallopUspIcon>
                    
                    }
                  </ScallopUSPFront>
                  <ScallopUSPBack>
                  <ScallopUSPChainContent>
                      {chainValue.back.content}
                    </ScallopUSPChainContent>
                    {chainValue.back.icon && 
                      <ScallopUspIcon src= {chainValue.back.icon} alt= "minus"></ScallopUspIcon>
                    
                    }
                  </ScallopUSPBack>
                </ScallopUSPChain>
              );
            })}
          </ScallopChainUSPList>

          <ScallopSectionDetail>
            <ScallopUSPBg></ScallopUSPBg>
            <ScallopUSPBgImg className= "detailImg" iHeight={"23%"} iBottom={"2rem"} iRight={"3rem"} >
              <img src={images.scallopUltraFast} alt="scallop ultra fast" />
            </ScallopUSPBgImg>
            <ScallopUSPHead>
              <ScallopUSPTitle>Ultra-fast</ScallopUSPTitle>
            </ScallopUSPHead>
            <ScallopUSPContent>
              Real-time crypto conversions meaning you don't have to sell them before paying in your stablecoins.
            </ScallopUSPContent>
          </ScallopSectionDetail>
        </ScallopSection>

      </div>
    </ScallopChainWhySectionStyle>
  );
};

export default ScallopChainWhySection;
