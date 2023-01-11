import React from "react";
import Marquee from "react-fast-marquee";
import { images } from "../../config/images";
import {
  ScallopChainMarqueeStyle,
  ScallopMarqueeItemStyle,
  ScallopDownloadIcons,
} from "./ScallopChainMarquee.styles";

import { PlatformDownload } from "../Banner/Banner.styles";

const leftMarqueeItems = [
  {
    image: images.scallopAntiTheft,
    alt: "Anti theft",
    sWidth: "200px",
    content: "Anti-theft protection",
    direction: 'column'
  },
  {
    image: images.iPhoneX,
    alt: "iphone",
    sWidth: "500px",
    content: "Create Direct debits for automated bill payments",
    direction: 'row'
  },
  {
    image: images.scallopKyc,
    alt: "Kyc",
    sWidth: "500px",
    content: "KYC-Verified regulated defi accounts.",
    direction: 'row'
  },
  {
    image: images.scallopEliteCard,
    alt: "Elite Card",
    sWidth: "200px",
    content: "Exclusivity with Elite membership",
    direction: 'column'
  },
  {
    image: images.scallopFingerPrint,
    alt: "Elite Card",
    sWidth: "300px",
    content: "Encrypted Security",
    direction: 'column'
  }
];

const rightMarqueeItems = [
  {
    image: images.scallopCryptoCon,
    alt: "Crypto Conversion",
    sWidth: "500px",
    content: "Seamless fiat to crypto conversion",
    direction: 'row'
  },
  {
    image: images.scallopOnetime,
    alt: "onetime Scallop",
    sWidth: "500px",
    content: "Create onetime and reoccuring scheduled payments.",
    direction: 'row'
  },
  {
    image: images.scallopFingerPrint,
    alt: "Fingerprints",
    sWidth: "200px",
    content: "Encrypted Security",
    direction: 'column'
  },
  {
    image: images.scallopCryptoWallets,
    alt: "crypto wallets",
    sWidth: "500px",
    content: "Create, Manage & customize any amount of crypto wallets",
    direction: 'row'
  },
];

const ScallopChainMarquee = () => {
  return (
    <ScallopChainMarqueeStyle className="scallopmarquee">
      <Marquee direction="left" speed={35} gradient= {false} gradientWidth={0}>
        <ul>
          {leftMarqueeItems.map((left, i) => {
            return (
              <ScallopMarqueeItemStyle key={i} sWidth = {left.sWidth} direction= {left.direction}>
                <img src={left.image} alt={left.alt} />
                <p>{left.content}</p>
              </ScallopMarqueeItemStyle>
            );
          })}
        </ul>
      </Marquee>
      <Marquee direction="right" speed={35} gradient= {false} gradientWidth={0}>
        <ul>
          {rightMarqueeItems.map((right, i) => {
            return (
              <ScallopMarqueeItemStyle key={i} sWidth = {right.sWidth} direction= {right.direction}>
                <img src={right.image} alt={right.alt} />
                <p>{right.content}</p>
              </ScallopMarqueeItemStyle>
            );
          })}
        </ul>
      </Marquee>
      <ScallopDownloadIcons>
        <PlatformDownload>
          <a
            href="https://apps.apple.com/us/app/scallop/id1599717690"
            target="_blank"
            rel="noreferrer"
          >
            <img src={images.ios} alt="" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.scallopxledger&hl=en&gl=US"
            target="_blank"
            rel="noreferrer"
          >
            <img src={images.android} alt="" className="android" />
          </a>
        </PlatformDownload>
      </ScallopDownloadIcons>
    </ScallopChainMarqueeStyle>
  );
};

export default ScallopChainMarquee;
