import Swiper from "@/components/Common/Swiper";
import * as S from "./style";
import { ISwiperProps } from "@/types/swiper";
import IntroGiftItem from "@/constants/IntroGift.json";
import { Autoplay } from "swiper/modules";
import { FaHeart } from "react-icons/fa";

const swiperProps: ISwiperProps = {
  imageList: Object.entries(IntroGiftItem).map(([, value]) => {
    return value;
  }),
  modules: [Autoplay],
  height: "100%",
  width: "100%",
  pagination: false,
  spaceBetween: 80,
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
        <span>
          Gift Ideas <FaHeart color="red" size={30} />
        </span>
      </S.GiftHeader>
      <S.SwiperContainer>
        <S.SwiperWrapper>
          <Swiper props={swiperProps} />
        </S.SwiperWrapper>
      </S.SwiperContainer>
    </S.Container>
  );
};

export default PreviewGift;
