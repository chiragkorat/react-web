import React from "react";
import {
    ScallopUSP,
    ScallopUSPHead,
    ScallopUSPTitle,
    ScallopUSPContent,
    ScallopUSPBg,
    ScallopUSPBgImg,
    ScallopUspBack,
    ScallopUspFront,
    ScallopUspIcon,
} from "./ScallopKeyUspSection.styles";



const ScallopKeyUspSection = (props) => {
    return (
        <ScallopUSP sWidth={props.data.sWidth}>
            <ScallopUSPBg></ScallopUSPBg>
            <ScallopUspFront>
                <ScallopUSPBgImg iHeight={props.data.iHeight} iTop={props.data.iTop} iBottom={props.data.iBottom} iRight={props.data.iRight} iLeft={props.data.iLeft} >
                    <img src={props.data.image} alt={props.data.alt}></img>
                </ScallopUSPBgImg>
                <ScallopUSPHead>
                    <ScallopUSPTitle>{props.data.title}</ScallopUSPTitle>
                </ScallopUSPHead>
                <ScallopUSPContent>{props.data.content}</ScallopUSPContent>
                <ScallopUspIcon src= {props.data.icon} alt= "plus"></ScallopUspIcon>
            </ScallopUspFront>
            <ScallopUspBack>
                {props.data.back.image ??
                    <ScallopUSPBgImg iHeight={props.data.back.iHeight} iTop={props.data.back.iTop} iBottom={props.data.back.iBottom} iRight={props.data.back.iRight} iLeft={props.data.back.iLeft} >
                        <img src={props.data.back.image} alt={props.data.back.alt}></img>
                    </ScallopUSPBgImg>
                }
                {
                    props.data.back.title &&
                    <ScallopUSPHead>
                        <ScallopUSPTitle>{props.data.back.title}</ScallopUSPTitle>
                    </ScallopUSPHead>
                }
                {
                    props.data.back.content &&
                    <ScallopUSPContent>{props.data.back.content}</ScallopUSPContent>
                }
                <ScallopUspIcon src= {props.data.back.icon} alt= "minus"></ScallopUspIcon>
            </ScallopUspBack>

        </ScallopUSP>
    );
};

export default ScallopKeyUspSection;
