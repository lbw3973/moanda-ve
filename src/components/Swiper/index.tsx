import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import * as S from "./style";
import { Navigation } from "swiper/modules";
import { mainImageList } from "../../util/importImage";

const Swiper = () => {
  return (
    <>
      <S.swiper
        modules={[Navigation]}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        navigation
        pagination={{ clickable: true }}
        className="relative h-full"
      >
        {mainImageList.map((img, index) => (
          <S.swiperSlide key={index}>
            <img src={img} />
          </S.swiperSlide>
        ))}
      </S.swiper>
    </>
  );
};

export default Swiper;
