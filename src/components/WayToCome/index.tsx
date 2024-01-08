import * as S from "./style";
import LocationCard from "../LocationCard";
import constant_base from "@/constants/base.json";
import constant_intro from "@/constants/intro.json";
import React, { MouseEvent } from "react";
import { FaRegCopy } from "react-icons/fa";

const WayToCome = () => {
  const handleClipboardWrite = (e: MouseEvent<HTMLSpanElement>) => {
    const text = e.currentTarget.textContent ?? "";
    navigator.clipboard.writeText(text);
  };
  return (
    <>
      <S.LocationHeader>
        <h2>찾아오시는 길</h2>
      </S.LocationHeader>
      <S.LocationContainer>
        <LocationCard />
        <S.InformContainer>
          <div className="wayToCome">
            <h3>매장 주소</h3>
            <span>{constant_base.Address}</span>
            <br />
            <span className="clickNotice">지도의 핀을 클릭하면 카카오맵으로 이동합니다.</span>
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
            <span onClick={handleClipboardWrite}>
              {constant_base.Contact}
              <FaRegCopy />
            </span>
          </div>
        </S.InformContainer>
      </S.LocationContainer>
    </>
  );
};

export default WayToCome;
