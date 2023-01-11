import React from "react";
import { images } from "../../config/images";
import {
  ScallopKeyUspSectionStyle,
  ScallopUSPList,
} from "./ScallopKeyUspSection.styles";
import ScallopKeyItem from "./ScallopKeyItem";

const Usps = [
  {
    title: "Your everyday bank account",
    image: images.everyday,
    alt: "everyday",
    sWidth: '65%',
    content: "Set up direct debits, receive your salary and send/receive money",
    iHeight: "35%",
    iTop: "", 
    iBottom: "20px",
    iRight: "0",
    icon: images.plus,
    back: {
      content: "Set up direct debits, receive your salary and send/receive money. Lorem ipsum lorem ipsum lorem ipsum.  Lorem ipsum lorem ipsum lorem ipsum.  Lorem ipsum lorem ipsum lorem ipsum. ",
      icon: images.minus
    }
  },
  {
    title: "UK and EU bank accounts",
    image: images.euCards,
    alt: "cards",
    sWidth: '31.5%',
    content: "Open GBP and IBAN accounts in a flash with an AI-powered KYC process!",
    iHeight: "80%",
    iTop: "", 
    iBottom: "10px",
    iRight: "0",
    icon: images.plus,
    back: {
      content: "Set up direct debits, receive your salary and send/receive money. Lorem ipsum lorem ipsum lorem ipsum.  Lorem ipsum lorem ipsum lorem ipsum.  Lorem ipsum lorem ipsum lorem ipsum. ",
      icon: images.minus
    }
  },
  {
    title: "DeFi Integrated",
    image: images.defi,
    alt: "Defi",
    sWidth: '31.5%',
    content: "innovative financial tools to manage your finances and boost your ROI.",
    iHeight: "65%",
    iTop: "", 
    iBottom: "0",
    iRight: "0",
    icon: images.plus,
    back: {
      content: "Set up direct debits, receive your salary and send/receive money. Lorem ipsum lorem ipsum lorem ipsum.  Lorem ipsum lorem ipsum lorem ipsum.  Lorem ipsum lorem ipsum lorem ipsum. ",
      icon: images.minus
    }
  },
  {
    title: "Digital banking",
    image: images.digiBank,
    alt: "digital bank",
    sWidth: '31.5%',
    content: "Manage your finances online and in real-time",
    iHeight: "80%",
    iTop: "", 
    iBottom: "0",
    iRight: "0",
    icon: images.plus,
    back: {
      content: "Set up direct debits, receive your salary and send/receive money. Lorem ipsum lorem ipsum lorem ipsum.  Lorem ipsum lorem ipsum lorem ipsum.  Lorem ipsum lorem ipsum lorem ipsum. ",
      icon: images.minus
    }
  },
  {
    title: "Connect your Crypto Wallet",
    image: images.crypWallet,
    alt: "crypto",
    sWidth: '31.5%',
    content: "Securely store crypto and fiat in one place",
    iHeight: "65%",
    iTop: "", 
    iBottom: "0",
    iRight: "0",
    icon: images.plus,
    back: {
      content: "Set up direct debits, receive your salary and send/receive money. Lorem ipsum lorem ipsum lorem ipsum.  Lorem ipsum lorem ipsum lorem ipsum.  Lorem ipsum lorem ipsum lorem ipsum. ",
      icon: images.minus
    }
  },
  {
    title: "Integrated hardware wallet",
    image: images.cardusp,
    alt: "wallet",
    sWidth: '31.5%',
    content: "For the first time, store, send and receive your crypto to your Account with integrated hardware wallets",
    iHeight: "65%",
    iTop: "", 
    iBottom: "0",
    iRight: "0",
    icon: images.plus,
    back: {
      content: "Set up direct debits, receive your salary and send/receive money. Lorem ipsum lorem ipsum lorem ipsum.  Lorem ipsum lorem ipsum lorem ipsum.  Lorem ipsum lorem ipsum lorem ipsum. ",
      icon: images.minus
    }
  },
  {
    title: "Always at your service",
    image: images.support,
    alt: "support",
    sWidth: '65%',
    content: " 24*7 customer support",
    iHeight: "45%",
    iTop: "", 
    iBottom: "30px",
    iRight: "4rem",
    icon: images.plus,
    back: {
      content: "Set up direct debits, receive your salary and send/receive money. Lorem ipsum lorem ipsum lorem ipsum.  Lorem ipsum lorem ipsum lorem ipsum.  Lorem ipsum lorem ipsum lorem ipsum. ",
      icon: images.minus
    }
  }
  
];


const ScallopKeyUspSection = () => {
  return (
    <ScallopKeyUspSectionStyle>
      <div className="container">        
        <ScallopUSPList className="ScallopUSPList">
          {Usps.map((usp, i) => {
            return (
              <ScallopKeyItem className="ScallopKeyItem" key={i} data= {usp }/>
            );
          })}
        </ScallopUSPList>
      </div>
    </ScallopKeyUspSectionStyle>
  );
};

export default ScallopKeyUspSection;
