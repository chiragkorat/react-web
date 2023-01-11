import React from "react";
import { images } from "../../config/images";
import { ScallopBankingSectionStyle, ScallopBankingSectionImg } from "./ScallopBankingSection.styles";

const ScallopBankingSection = () => {
  return (
    <ScallopBankingSectionStyle>
      <div className="container scallopbanking">
        <h2>Scallop Banking</h2>
        <p>The simplest way to manage digital money.  Enhance and simplify your crypto journey.
          Everyday crypto banking. Flexible and accessible</p>
        <ScallopBankingSectionImg className="scallopimg-banking">
          <img src={images.scallopBank} alt="scallop bank "  width={395} height= {395}/>
        </ScallopBankingSectionImg>
      </div>


    </ScallopBankingSectionStyle>
  );
};

export default ScallopBankingSection;
