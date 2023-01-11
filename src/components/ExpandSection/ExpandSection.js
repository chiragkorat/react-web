import React from "react";
import Globe from "../Globe/Globe";
import { ExpandSectionStyle, Heading, H2, Content, ExpandWrapper, ScallopSuperAppContainer, ScalopSuperApp, ScallopSuperAppContent } from "./ExpandSection.styles";
import Fade from 'react-reveal/Fade';

const ExpandSection = () => {
  return (
    <ExpandSectionStyle>
      <ExpandWrapper>
        <div className="container">
          <div>
          <ScallopSuperAppContainer>
            <ScalopSuperApp>
              <ScallopSuperAppContent>
                <H2 className="supercharge">Supercharged App</H2>
                <Content>Scallop app is supercharged with powerful features</Content>
              </ScallopSuperAppContent>
            </ScalopSuperApp>
          </ScallopSuperAppContainer>

          </div>
        </div>
      </ExpandWrapper>
    </ExpandSectionStyle>
  );
};

export default ExpandSection;
