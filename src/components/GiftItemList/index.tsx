import * as S from "./style";
import GiftItems from "@/constants/GiftData.json";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={3}
              pagination={{ clickable: true }}
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
      <S.GiftItemHeader>
        <p>3000~6000원대</p>
        <p>연노랑박스</p>
      </S.GiftItemHeader>
      <S.GiftItemBoxImg>
        <img src="./gift/1/연노랑박스.jpg" alt="박스이미지1" />
        <img src="./gift/1/결혼답례품.jpg" alt="박스이미지2" />
      </S.GiftItemBoxImg>
      <div>
        <h2>4000원 미니쿠키2종</h2>
        <h2>5600원 휘낭시에2종</h2>
        <h2>6000원 미니쿠키3종</h2>
      </div>
      <div>
        <h3>인포메세지</h3>
      </div>
      <div>
        <h1>참고용 사진</h1>
        <div>
          <div>
            <img src="" alt="미니쿠키2종" />
            <h2>미니쿠키2종</h2>
          </div>
          <div>
            <img src="" alt="휘낭시에2종" />
            <h2>휘낭시에2종</h2>
          </div>
        </div>
        <div>
          <div>
            <img src="" alt="미니쿠키3종" />
            <h2>미니쿠키3종</h2>
          </div>
          <div>
            <img src="" alt="결혼식답례품" />
            <h2>결혼식답례품</h2>
          </div>
        </div>
      </div>
    </S.GiftItems>
  );
};

export default GiftItemList;
