import React from "react";
import { images } from "../../config/images";
import {
  ScallopChainCardSectionStyle,
  ScallopBankingCardBasic,
  ScallopBankingCardElite,
  ScallopChainCards,
  ScallopBankingCardContent,
} from "./ScallopChainCardSection.styles";

import { ScallopBankingSectionImg } from "../ScallopBankingSection/ScallopBankingSection.styles";
import Button from "../Button/Button";
import Grid from '@mui/material/Grid';


const ScallopChainCardSection = () => {
  return (
    <ScallopChainCardSectionStyle className="ScallopChain-CardSection">
      <Grid className="container card-title">
        <h2>Scallop Card</h2>
        <p>Your all-in-one fiat and crypto card</p>
        <ScallopBankingSectionImg>
          <img
            src={images.scallopCards}
            alt="scallop cards "
            width={700}
            height={440}
          />
        </ScallopBankingSectionImg>
        <ScallopChainCards>
          <ScallopBankingCardBasic className="basic-card mb-3">
            <ScallopBankingCardContent className="basic-card-content">
              <button>Basic</button>
              <p className="card-heading">Access through technology.</p>
              <ul className="card-list">
                <li>1.5% Exchange Fee</li>
                <li>Free Banking Accounts</li>
                <li>Free Virtual Card</li>
                <li>Free Hardware Wallet (Buy Scallop Tokens worth 150 USD)</li>
              </ul>
            <Grid >
              <img
                src={images.basicCards} alt="basic cards " />
              <Grid className="cardicon">
                <img src={images.plus}/>
              </Grid>

            </Grid>
            </ScallopBankingCardContent>
          </ScallopBankingCardBasic>
          <ScallopBankingCardElite className="basic-card">
            <ScallopBankingCardContent className="basic-card-content">
              <button>Elite</button>
              <p className="card-heading">Access through technology.</p>
              <ul className="card-list">
                <li>1% Exchange Fee</li>
                <li>Free Banking Accounts</li>
                <li>Free Virtual Card</li>
                <li>Free physical Debit Card</li>
                <li>Free Hardware Wallet (Buy Scallop Tokens worth 75 USD)</li>
              </ul>
              <img
                src={images.eliteCards}
                alt="elite cards "
              />
               <Grid className="cardicon">
                <img src={images.plus}/>
              </Grid>
            </ScallopBankingCardContent>
          </ScallopBankingCardElite>
        </ScallopChainCards>
      </Grid>
    </ScallopChainCardSectionStyle>
  );
};

export default ScallopChainCardSection;
