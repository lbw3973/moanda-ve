import * as S from "./style";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import IntroGiftItem from "@/constants/IntroGift.json";

const test = Object.entries(IntroGiftItem).map(([, value]) => {
  return value;
});
console.log(test);

const PreviewGift = () => {
  return (
    <S.Container>
      <S.ContentWrapper>
        <h2>
          Moanda've
          <br />
          <span>Gift Ideas</span>
        </h2>
      </S.ContentWrapper>
      <S.SwiperWrapper>
        <Swiper
          className="swiper"
          modules={[Navigation]}
          slidesPerView={4}
          loop={true}
          spaceBetween={10}
          centeredSlides={true}
        >
          {Object.entries(IntroGiftItem).map(([title, data], index) => (
            <SwiperSlide key={index}>
              <img src={data} alt={title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </S.SwiperWrapper>
    </S.Container>
  );
};

export default PreviewGift;
