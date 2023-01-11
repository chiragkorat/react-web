import React, { useState } from "react";
import { images } from "../../config/images";
import {
  ScallopFeaturedInStyle,
  ScallopFeaturedItems,
  ScallopBrandImg,
  ScallopLeftShape,
  ScallopRightShape,
  ScallopModalOverlay,
  ScallopFeatureModal,
} from "./ScallopFeaturedIn.styles";

const list = [
  {
    brands: [
      images.forbesFeatured,
      images.yahoo,
      images.bloomberg,
      images.investing,
      images.nasdaq,
      images.coinpedia,
    ],
  },
  {
    brands: [images.coinspeaker, images.nulltx, images.rappi, images.clarivate],
    showButton: true,
  },
];

const modalList = [
  {
    brands: [
      images.forbesFeatured,
      images.yahoo,
      images.bloomberg,
      images.investing,
      images.nasdaq,
      images.coinpedia,
    ],
  },
  {
    brands: [images.coinspeaker, images.nulltx, images.rappi, images.clarivate],
  },
  {
    brands: [images.coinpedia, images.investing, images.coinspeaker],
  },
  {
    brands: [images.clarivate, images.yahoo],
  },
];

const ScallopFeaturedIn = () => {
  const [showModal, onShowModal] = useState(false);
  return (
    <>
      <ScallopFeaturedInStyle>
        <div className="container featured">
          <h2>Featured in Best</h2>
          <p>trusted by many</p>
          <ul>
            {list.map((item, index) => {
              return (
                <ScallopFeaturedItems key={index}>
                  <ScallopLeftShape></ScallopLeftShape>
                  <ScallopBrandImg className="Featuredtab">
                  {item.brands.map((brand, i) => {
                    return <img src={brand} alt="" key={i}/>;
                      
                  })}
                  {item.showButton && <button onClick={()=> onShowModal(true)}>See All</button>}
                  </ScallopBrandImg>
                </ScallopFeaturedItems>
              );
            })}
          </ul>
          <hr/>
        </div>
      </ScallopFeaturedInStyle>
      {/* Move below code to React Portals...*/}
      {showModal && (
        <ScallopModalOverlay>

         <ScallopFeatureModal>
         <button onClick={()=> onShowModal(false)}>X</button>
         <h2>Featured in Best</h2>
          <ul>
            {modalList.map((item, index) => {
              return (
                <ScallopFeaturedItems key={index}>
                   <ScallopLeftShape></ScallopLeftShape>
                  <ScallopBrandImg>
                  {item.brands.map((brand, i) => {
                    return <img src={brand} alt="" key={i}/>;
                      
                  })}
                  </ScallopBrandImg>
                </ScallopFeaturedItems>
              );
            })}
          </ul>
        </ScallopFeatureModal>
        </ScallopModalOverlay>
      )}
    </>
  );
};

export default ScallopFeaturedIn;
