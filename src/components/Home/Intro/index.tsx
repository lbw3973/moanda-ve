import * as S from "./style";
// import { mainImageList_DeskTop } from "@/constants/importImage";
// import { ISwiperProps } from "@/types/swiper";
// import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

// const swiperProps: ISwiperProps = {
//   imageList: mainImageList_DeskTop,
//   isBlack: [false, true],
//   modules: [EffectFade, Autoplay, Navigation],
//   height: "calc(100vh - 80px)",
//   width: "100%",
//   pagination: true,
//   spaceBetween: 0,
//   useNavigation: true,
// };

const Intro = () => {
  const [isBlackIndex, setIsBlackIndex] = useState(1);

  return (
    <S.Container>
      <Swiper onSlideChange={e => setIsBlackIndex(e.activeIndex + 1)}>
        <SwiperSlide>
          <S.FirstSlide>
            <S.FirstSlideImg>
              <div>
                <img src="/Intro/intro-logo.png" alt="logo" className="logo" />
                <S.FirstSlideText>
                  <h1>비건디저트</h1>
                  <p>최고급 식물성 재료만을 사용하여 정성스럽게 만든 다양한 비건 디저트를 선보입니다.</p>
                  <p>계절에 따라 변화하는 메뉴를 통해 신선하고 다양한 맛의 디저트를 즐길 수 있습니다.</p>
                  <p>모든 생명을 존중하는 지속 가능한 미식 경험을 제공하기 위해 노력합니다.</p>
                </S.FirstSlideText>
              </div>
              <img src="/Intro/intro-img.png" alt="img" className="img" />
            </S.FirstSlideImg>
          </S.FirstSlide>
        </SwiperSlide>
        <SwiperSlide>
          <S.SecondSlide>
            <img src="/Main/intro2.png" alt="" />
            <div>
              <h1>비건디저트</h1>
              <p>최고급 식물성 재료만을 사용하여 정성스럽게 만든 다양한 비건 디저트를 선보입니다.</p>
              <p>계절에 따라 변화하는 메뉴를 통해 신선하고 다양한 맛의 디저트를 즐길 수 있습니다.</p>
              <p>모든 생명을 존중하는 지속 가능한 미식 경험을 제공하기 위해 노력합니다.</p>
            </div>
          </S.SecondSlide>
        </SwiperSlide>
        <S.NavigationBar>
          <p>
            <span>{isBlackIndex}</span>/ <span>2</span>
          </p>
        </S.NavigationBar>
      </Swiper>
    </S.Container>
  );
};

export default Intro;
