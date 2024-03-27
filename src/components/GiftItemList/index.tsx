import * as S from "./style";
import GiftItems from "@/constants/GiftData.json";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const GiftItemList = () => {
  return (
    <S.GiftItems>
      <S.GiftLine></S.GiftLine>
      {/* <h1>답례품 리스트</h1>
      <h2>MOANDA`VE</h2> */}
      <img src="/giftTitle.png" alt="" />
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
                <img src={data.src} alt="이미지" />
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
