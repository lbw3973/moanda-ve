import Swiper from "@/components/Common/Swiper";
import * as S from "./style";
import { ISwiperProps } from "@/types/swiper";
import IntroGiftItem from "@/constants/IntroGift.json";
import { Autoplay, Pagination } from "swiper/modules";
import { FaHeart } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { useScreenSizeStore } from "@/stores/screenSizeStore";
import { useSwiperCurrentIndexStore } from "@/stores/swiperCurrentIndexStore";

const swiperProps: ISwiperProps = {
  imageList: Object.values(IntroGiftItem),
  modules: [Autoplay, Pagination],
  height: "100%",
  width: "100%",
  pagination: true,
  spaceBetween: 80,
  useNavigation: false,
  slideperView: 4,
  loop: true,
  useTouchSlide: true,
};

const PreviewGift = () => {
  const { isMobileView } = useScreenSizeStore();
  const { currentIndex } = useSwiperCurrentIndexStore();

  return (
    <S.Container>
      <S.GiftHeader>
        Moanda've
        <br />
        <span>
          Gift Ideas <FaHeart color="red" size={30} />
        </span>
        <S.LinkToGift to="/gift">
          답례품 보러가기
          <IoArrowForward size={25} />
        </S.LinkToGift>
      </S.GiftHeader>
      <S.SwiperContainer>
        <S.SwiperWrapper>
          <Swiper props={{ ...swiperProps, slideperView: isMobileView ? 1 : 4, spaceBetween: isMobileView ? 0 : 80 }} />
        </S.SwiperWrapper>
        <S.SwiperPagination to="gift">
          {Object.keys(IntroGiftItem)[currentIndex]}
          <IoArrowForward size={25} />
        </S.SwiperPagination>
      </S.SwiperContainer>
    </S.Container>
  );
};

export default PreviewGift;
