import Swiper from "@/components/Swiper";
import * as S from "./style";
import { mainImageList_DeskTop_Gift } from "@/constants/importImage";

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
        <Swiper imageList={mainImageList_DeskTop_Gift} width="400px" height="100%" />
      </S.SwiperWrapper>
    </S.Container>
  );
};

export default PreviewGift;
