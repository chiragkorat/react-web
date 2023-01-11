import React from "react";
import { images } from "../../config/images";
import {
  KeyFeatureSectionStyle,
  Heading,
  MainHead,
  Content,
  FeatureList,
  SingleFeature,
  FeatureHead,
  FeatureImg,
  FeatureTitle,
  FeatureContent,
  MainHeadWrapper,
  SideLines1,
  SideLines2,
  FeatureBg,
  FeatureBgImg
} from "./KeyFeatureSection.styles";
import Fade from "react-reveal/Fade";
import '../../App.css';

const Features = [
  {
    title: "Scallop Banking Accounts",
    image: images.bankImg,
    alt: "bank",
    content: "Store your crypto and fiat in one place, so you can spend them just as easily",
  },
  {
    title: "Banking Chain",
    image: images.shieldImg,
    alt: "bank",
    content: "You're covered by insurance if anything happens to your account—and if it happens, we'll take care of it!",
  },
  
];

const KeyFeatureSection = () => {
  return (
    <KeyFeatureSectionStyle>
      <div className="container">        
        <FeatureList className="keyfeature-card">
          {Features.map((feature, i) => {
            return (
              <SingleFeature key={i}>
                <FeatureBg></FeatureBg>
                <FeatureBgImg>
                  <img src= {feature.image} alt= {feature.alt}></img>
                </FeatureBgImg>
                <FeatureHead>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                </FeatureHead>
                <FeatureContent>{feature.content}</FeatureContent>
              </SingleFeature>
            );
          })}
        </FeatureList>
      </div>
    </KeyFeatureSectionStyle>
  );
};

export default KeyFeatureSection;
