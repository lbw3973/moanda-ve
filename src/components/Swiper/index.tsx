import "swiper/css";
import "swiper/css/pagination";
import * as S from "./style";
import { Autoplay, Pagination } from "swiper/modules";

const Swiper = ({ imageList, width, height }: { imageList: string[]; width: string; height: string }) => {
  return (
    <>
      <S.swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        navigation
        pagination={{ clickable: true }}
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
        // }}
        className="relative h-full"
        $width={width}
        $height={height}
      >
        {imageList.map((img, index) => (
          <S.swiperSlide key={index}>
            <img src={img} />
          </S.swiperSlide>
        ))}
      </S.swiper>
    </>
  );
};

export default Swiper;
