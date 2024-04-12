import "swiper/css";
import "swiper/css/effect-fade";
import * as S from "./style";
import { ISwiperProps } from "@/types/swiper";
import { useState } from "react";

const Swiper = ({ props }: { props: ISwiperProps }) => {
  const [isBlackIndex, setIsBlackIndex] = useState(1);

  return (
    <>
      <S.swiper
        modules={props.modules}
        effect="fade"
        slidesPerView={props.slideperView}
        loop={props.loop}
        spaceBetween={props.spaceBetween}
        scrollbar={{ draggable: true }}
        navigation
        touchRatio={Number(props.useTouchSlide)}
        pagination={{ clickable: props.pagination }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSlideChange={e => setIsBlackIndex(e.activeIndex + 1)}
        $width={props.width}
        $height={props.height}
        $isBlack={props.isBlack ? props.isBlack[isBlackIndex - 1] : false}
      >
        {props.imageList.map((img, index) => (
          <S.swiperSlide key={index}>
            <img src={img} />
          </S.swiperSlide>
        ))}
        {props.useNavigation && (
          <S.NavigationBar>
            <p>
              <span>{isBlackIndex}</span>/ <span>{props.imageList.length}</span>
            </p>
          </S.NavigationBar>
        )}
        {props.children}
      </S.swiper>
    </>
  );
};

export default Swiper;
