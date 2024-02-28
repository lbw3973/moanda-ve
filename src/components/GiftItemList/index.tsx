import React from "react";
import * as S from "./style";

import GiftItems from "@/constants/GiftData.json";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type GiftItemType = {
  name: string;
  src: string;
  price: string;
  info: string[];
};
const GiftItemList = () => {
  return (
    <S.GiftItems>
      <S.GiftLine></S.GiftLine>
      <h1>답례품 리스트</h1>
      <h2>MOANDA`VE</h2>
      {Object.entries(GiftItems).map(([title, item], index) => (
        <S.GiftItem>
          <S.GiftItemHeader key={index}>
            <p>{title}</p>
          </S.GiftItemHeader>
          <S.GiftItemBoxImg>
            <Swiper
              className="swiper"
              modules={[Navigation, Autoplay]}
              slidesPerView={3}
              autoplay={{ delay: 3000 }}
              loop={true}
            >
              {item.boxImages.map((img, index) => (
                <SwiperSlide key={index} className="swiperSlide">
                  <img src={img} alt="박스이미지" className="swiperImage" />
                </SwiperSlide>
              ))}
            </Swiper>
          </S.GiftItemBoxImg>
          <S.GiftItemImg>
            {item.components.map((data, index) => (
              <div>
                <div key={index}>
                  <h1>{data.name}</h1>
                  <h2>{data.price}원</h2>
                </div>
                <img src={data.src} alt="이미지" />
              </div>
            ))}
          </S.GiftItemImg>
        </S.GiftItem>
      ))}
    </S.GiftItems>
  );
};

export default GiftItemList;
