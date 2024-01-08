import * as S from "./style";
import LocationCard from "../LocationCard";
import constant_base from "@/constants/base.json";
import constant_intro from "@/constants/intro.json";
import React from "react";

const WayToCome = () => {
  return (
    <S.LocationContainer>
      <LocationCard />
      <S.InformContainer>
        <div className="wayToCome">
          <h3>찾아오시는 길</h3>
          <span>{constant_base.Address}</span>
        </div>
        <div className="parking">
          <h3>주차장 안내</h3>
          <span>
            {constant_intro.ParkingInfo.split("\n").map((span, index) => (
              <React.Fragment key={index}>
                {span} <br />
              </React.Fragment>
            ))}
          </span>
        </div>
        <div className="contact">
          <h3>전화번호</h3>
          <span>{constant_base.Contact}</span>
        </div>
      </S.InformContainer>
    </S.LocationContainer>
  );
};

export default WayToCome;
