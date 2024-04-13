import Swiper from "@/components/Common/Swiper";
import * as S from "./style";
import { ISwiperProps } from "@/types/swiper";
import IntroGiftItem from "@/constants/IntroGift.json";
import { Autoplay } from "swiper/modules";
import { FaHeart } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { useScreenSizeStore } from "@/stores/screenSizeStore";

const swiperProps: ISwiperProps = {
  imageList: Object.entries(IntroGiftItem).map(([, value]) => {
    return value;
  }),
  modules: [],
  height: "100%",
  width: "100%",
  pagination: false,
  spaceBetween: 80,
  useNavigation: false,
  slideperView: 4,
  loop: true,
  useTouchSlide: true,
};

const PreviewGift = () => {
  const { isMobileView } = useScreenSizeStore();

  return (
    <S.Container>
      <S.GiftHeader>
        Moanda've
        <br />
        <span>
          Gift Ideas <FaHeart color="red" size={30} />
        </span>
        <S.SwiperPagination to="/gift">
          답례품 보러가기
          <IoArrowForward size={25} />
        </S.SwiperPagination>
      </S.GiftHeader>
      <S.SwiperContainer>
        <S.SwiperWrapper>
          <Swiper props={{ ...swiperProps, slideperView: isMobileView ? 1 : 4, spaceBetween: isMobileView ? 0 : 80 }} />
        </S.SwiperWrapper>
      </S.SwiperContainer>
    </S.Container>
  );
};

export default PreviewGift;
