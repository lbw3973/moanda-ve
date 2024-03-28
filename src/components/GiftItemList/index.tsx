import * as S from "./style";
import GiftItems from "@/constants/GiftData.json";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

const GiftItemList = () => {
  const [swiperView, setSwiperView] = useState(0);

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setSwiperView(3);
    } else if (window.innerWidth > 450) {
      setSwiperView(2);
    } else {
      setSwiperView(1);
    }
  };
  console.log(swiperView);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const clickImage = () => {};
  return (
    <S.GiftItems>
      <S.GiftLine></S.GiftLine>
      <S.GiftTitle src="/giftTitle.png" alt="" />
      {Object.entries(GiftItems).map(([title, item], index) => (
        <S.GiftItem key={index}>
          <S.GiftItemHeader>
            <p>{title}</p>
          </S.GiftItemHeader>
          <S.GiftItemBoxImg>
            <Swiper
              className="swiper"
              modules={[Navigation, Autoplay]}
              slidesPerView={swiperView}
              autoplay={{ delay: 3000 }}
              loop={true}
              spaceBetween={10}
            >
              {item.boxImages.map((img, index) => (
                <SwiperSlide key={index} className="swiperSlide">
                  <img src={img} alt="박스이미지" className="swiperImage" />
                  <p>결혼식 답례품</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </S.GiftItemBoxImg>
          <S.GiftItemImg>
            {item.components.map((data, index) => (
              <div key={index}>
                <img src={data.src} alt="이미지" onClick={clickImage} />
                <div key={index}>
                  <h1>{data.name}</h1>
                  <h2>{data.price}원</h2>
                </div>
              </div>
            ))}
          </S.GiftItemImg>
        </S.GiftItem>
      ))}
    </S.GiftItems>
  );
};

export default GiftItemList;
