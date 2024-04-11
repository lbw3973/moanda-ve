import Swiper from "@/components/Common/Swiper";
import * as S from "./style";
import { mainImageList_DeskTop_Gift } from "@/constants/importImage";
import { ISwiperProps } from "@/types/swiper";

const swiperProps: ISwiperProps = {
  imageList: mainImageList_DeskTop_Gift,
  modules: [],
  height: "100%",
  width: "100%",
  pagination: false,
  spaceBetween: 200,
  useNavigation: false,
  slideperView: 4,
  loop: true,
};

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
        <Swiper props={swiperProps} />
      </S.SwiperWrapper>
    </S.Container>
  );
};

export default PreviewGift;
