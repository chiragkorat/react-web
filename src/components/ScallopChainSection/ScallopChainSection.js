import React, {useState} from "react";
import { images } from "../../config/images";
import {
  ScallopChainSectionStyle,
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
  ScallopChainMainHeader
} from "./ScallopChainSection.styles";
import {
  ScallopUSPHead,
  ScallopUSPTitle,
  ScallopUSPContent,
  ScallopUSPBg,
  ScallopUSPBgImg,
} from "../ScallopKeyUspSection/ScallopKeyUspSection.styles";

const chainValues = [
  {
    title: "Start Building for DApps",
    image: images.dapps,
    alt: "everyday",
    sWidth: "49%",
    content:
      "With a developer-friendly  develop your next decentralised application today.",
    iHeight: "70%",
    iTop: "",
    iBottom: "0",
    iRight: "0",
  },
  {
    title: "Affordable Transactions",
    image: images.transactions,
    alt: "cards",
    sWidth: "48%",
    content:
      "Apart from delivering speed and ease of use, Scallop Chain will ensure the transaction costs across different chains remain economical.",
    iHeight: "55%",
    iTop: "",
    iBottom: "10px",
    iRight: "10px",
  },
  {
    title: "Stake Scallop",
    sWidth: "32%",
    content: "Securely stake your tokens and earn rewards",
    iHeight: "65%",
    iTop: "",
    iBottom: "0",
    iRight: "0",
  },
  {
    title: "Scallop Explorer",
    sWidth: "32%",
    content: "Browse and track your transaction on scallop",
    iHeight: "85%",
    iTop: "",
    iBottom: "0",
    iRight: "0",
  },
  {
    title: "Swap Scallop",
    sWidth: "32%",
    content: "Swap your tokens with any on scallop",
    iHeight: "65%",
    iTop: "",
    iBottom: "0",
    iRight: "0",
  },
];

const scallopChainItems = [
  {
    heading: "Dev Friendly & Regulated",
    content: " A robust developer-friendly & regulated blockchain.",
    itemOpacity : '0.5',
    detail: {
      title: "Dev Friendly & Regulated",
      imagePath: images.scallopChain,
      alt: 'Dev Friendly',
      content:
        "Scallop Chain is the world's first regulated blockchain featuring the unique capability of powering cross-chain financial applications to establish a better DeFi future.",
    },
  },
  {
    heading: "Develop Robust, Affordable, & Intuitive dApps",
    content: "Build powerful Dapps on scallop chain",
    detail: {
      title: "Develop Robust, Affordable, & Intuitive dApps",
      imagePath: images.develop,
      alt: 'Develop',
      content:
        "With support for both EVM based smart contracts, build secure and feature-rich dApps that can process thousands of transactions every second.",
    },
  },
  {
    heading: "Cross-Blockchain Application Compatibility",
    content: "",
    detail: {
      title: "Cross-Blockchain Application Compatibility",
      imagePath: images.connections,
      alt: 'connections',
      content:
        "Now you will be able to integrate conventional banking with cross-blockchain applications to build the next generation of Decentralised Finance.",
    },
  },
  {
    heading: "No Middlemen Involvement in Partnerships",
    content: "",
    detail: {
      title: "No Middlemen Involvement in Partnerships",
      imagePath: images.middleman,
      alt: 'No Middleman',
      content:
        "Scallop Chain enables institutional partners to work directly with Scallop empowering them to offer a diverse range of financial services and benefits.",
    },
  },
];

const scallopChainDetail = { ...scallopChainItems[0].detail };



const ScallopChainSection = () => {
  const [scallopListItems, onScallopListItemsChange] = useState([...scallopChainItems]);
  const [scallopDetail, onScallopDetailChange] = useState({...scallopChainDetail});

  const onChainChange = (index) => {
    const item = { ...scallopChainItems[index].detail };
    const list = JSON.parse(JSON.stringify(scallopListItems)).map(({ itemOpacity, ...rest }) => rest);
    list[index].itemOpacity = '0.5';
    onScallopListItemsChange(list);
    onScallopDetailChange(item);
  };

  return (
    <ScallopChainSectionStyle>
      <div className="container">
      <ScallopChainMainHeader className="ScallopUSPList">
          <h2>Scallop Chain</h2>
          <p>Building the next generation of cross-chain banking platform</p>
        </ScallopChainMainHeader>
        <ScallopSection>
          <ul>
            {scallopListItems.map((chainItem, chainIndex) => {
              return (
                <ScallopChainListItemStyle className="scallopUSPList-card"
                  key={chainIndex}
                  
                  onClick={() => onChainChange(chainIndex)}
                >
                  <ScallopChainListItemPBg itemOpacity= {chainItem.itemOpacity}></ScallopChainListItemPBg>
                  <ScallopChainListItemHeaderStyle>
                    {chainItem.heading}
                  </ScallopChainListItemHeaderStyle>
                  <ScallopChainListItemContentStyle>
                    {chainItem.content}
                  </ScallopChainListItemContentStyle>
                </ScallopChainListItemStyle>
              );
            })}
          </ul>
          <ScallopSectionDetail className="ScallopSectionDetail">
            <ScallopUSPBg></ScallopUSPBg>
            <ScallopUSPBgImg iHeight={"60%"} iBottom={"0"} iRight={"7rem"}>
              <img src={scallopDetail.imagePath} alt="scallop chain" />
            </ScallopUSPBgImg>
            <ScallopUSPHead>
              <ScallopUSPTitle>{scallopDetail.title}</ScallopUSPTitle>
            </ScallopUSPHead>
            <ScallopUSPContent>{scallopDetail.content}</ScallopUSPContent>
          </ScallopSectionDetail>
        </ScallopSection>
        <ScallopChainUSPList>
          {chainValues.map((chainValue, i) => {
            return (
              <ScallopUSPChain key={i} sWidth={chainValue.sWidth} className="tab-box-extra">
                <ScallopUSPChainBg></ScallopUSPChainBg>
                <ScallopUSPChainBgImg
                  iHeight={chainValue.iHeight}
                  iTop={chainValue.iTop}
                  iBottom={chainValue.iBottom}
                  iRight={chainValue.iRight}
                  iLeft={chainValue.iLeft}
                >
                  <img src={chainValue.image} alt={chainValue.alt}></img>
                </ScallopUSPChainBgImg>
                <ScallopUSPChainHead>
                  <ScallopUSPChainTitle>
                    {chainValue.title}
                  </ScallopUSPChainTitle>
                </ScallopUSPChainHead>
                <ScallopUSPChainContent>
                  {chainValue.content}
                </ScallopUSPChainContent>
              </ScallopUSPChain>
            );
          })}
        </ScallopChainUSPList>
      </div>
    </ScallopChainSectionStyle>
  );
};

export default ScallopChainSection;
