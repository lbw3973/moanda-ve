import "swiper/css";
import "swiper/css/pagination";
import * as S from "./style";
import { Autoplay, Pagination } from "swiper/modules";
import { mainImageList_Mobile } from "../../constants/importImage";

const Swiper = () => {
  return (
    <>
      <S.swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="relative h-full"
      >
        {mainImageList_Mobile.map((img, index) => (
          <S.swiperSlide key={index}>
            <img src={img} />
          </S.swiperSlide>
        ))}
      </S.swiper>
    </>
  );
};

export default Swiper;
