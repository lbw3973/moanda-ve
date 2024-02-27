import Swiper from "@/components/Swiper";
import * as S from "./style";
import { mainImageList_DeskTop_Gift } from "@/constants/importImage";

const PreviewGift = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <Swiper imageList={mainImageList_DeskTop_Gift} width="400px" height="100%" />
      </S.Wrapper>
    </S.Container>
  );
};

export default PreviewGift;
