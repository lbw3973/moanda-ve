import Swiper from "@/components/Swiper";
import * as S from "./style";
import { mainImageList_DeskTop } from "@/constants/importImage";
import { ISwiperProps } from "@/types/swiper";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css/navigation";

const swiperProps: ISwiperProps = {
  imageList: mainImageList_DeskTop,
  isBlack: [true, false],
  modules: [EffectFade, Autoplay, Navigation],
  height: "calc(100vh - 80px)",
  width: "100%",
  pagination: true,
  spaceBetween: 0,
  useNavigation: true,
};

const Intro = () => {
  return (
    <S.Container>
      <Swiper props={swiperProps} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          fontSize: "60px",
          zIndex: "1000",
          transform: "translate(-50%, -50%)",
        }}
      >
        이미지 준비중...
      </div>
    </S.Container>
  );
};

export default Intro;
