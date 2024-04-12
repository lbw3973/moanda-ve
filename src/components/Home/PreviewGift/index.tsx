import Swiper from "@/components/Common/Swiper";
import * as S from "./style";
import { ISwiperProps } from "@/types/swiper";
import IntroGiftItem from "@/constants/IntroGift.json";

const swiperProps: ISwiperProps = {
  imageList: Object.entries(IntroGiftItem).map(([, value]) => {
    return value;
  }),
  modules: [],
  height: "100%",
  width: "100%",
  pagination: false,
  spaceBetween: 120,
  useNavigation: false,
  slideperView: 4,
  loop: true,
  useTouchSlide: true,
};

const test = Object.entries(IntroGiftItem).map(([, value]) => {
  return value;
});
console.log(test);

const PreviewGift = () => {
  return (
    <S.Container>
      <S.GiftHeader>
        Moanda've
        <br />
        <span>Gift Ideas</span>
      </S.GiftHeader>
      <S.SwiperContainer>
        <S.SwiperWrapper>
          <Swiper props={swiperProps} />
        </S.SwiperWrapper>
        <S.SwiperPagination></S.SwiperPagination>
      </S.SwiperContainer>
    </S.Container>
  );
};

export default PreviewGift;
