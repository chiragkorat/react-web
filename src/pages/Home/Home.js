import React from "react";
import Banner from "../../components/Banner/Banner";
import ExpandSection from "../../components/ExpandSection/ExpandSection";
import KeyFeatureSection from "../../components/KeyFeatureSection/KeyFeatureSection";
import ScallopChainCardSection from "../../components/ScallopChainCardSection/ScallopChainCardSection";
import Layout from "../../Layout";
import ScallopBankingSection from "../../components/ScallopBankingSection/ScallopBankingSection";
import ScallopKeyUspSection from "../../components/ScallopKeyUspSection/ScallopKeyUspSection";
import ScallopChainSection from "../../components/ScallopChainSection/ScallopChainSection";
import ScallopChainWhySection from "../../components/ScallopChainWhySection/ScallopChainWhySection";
import ScallopChainMarquee from "../../components/ScallopChainMarquee/ScallopChainMarquee";
import ScallopFeaturedIn from "../../components/ScallopFeaturedIn/ScallopFeaturedIn";

import { HomeStyle } from "./Home.styles";

 

const Home = () => {
  return (
    <Layout mainClass="home-page">
      <HomeStyle>
        <Banner />
        <KeyFeatureSection />
        <ScallopBankingSection/>
        <ScallopKeyUspSection />
        <ScallopChainSection />
        <ScallopChainCardSection />
        <ScallopChainWhySection />        
        <ExpandSection />
        <ScallopChainMarquee/>
        <ScallopFeaturedIn/>
      </HomeStyle>
    </Layout>
  );
};

export default Home;
