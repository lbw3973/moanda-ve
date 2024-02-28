import Swiper from "@/components/Swiper";
import * as S from "./style";
import { mainImageList_DeskTop_Gift } from "@/constants/importImage";
import { ISwiperProps } from "@/types/swiper";
import { Autoplay, Pagination } from "swiper/modules";

const swiperProps: ISwiperProps = {
  imageList: mainImageList_DeskTop_Gift,
  modules: [Pagination, Autoplay],
  height: "100%",
  width: "537px",
  pagination: true,
  spaceBetween: 80,
  useNavigation: false,
};

const PreviewGift = () => {
  return (
    <S.Container>
      <S.ContentWrapper>
        <h1>
          Moanda've
          <br />
          Gift Ideas
        </h1>
      </S.ContentWrapper>
      <S.SwiperWrapper>
        <Swiper props={swiperProps} />
      </S.SwiperWrapper>
    </S.Container>
  );
};

export default PreviewGift;
