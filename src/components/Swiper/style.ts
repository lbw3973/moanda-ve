import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const temp = styled.div``;

export const swiper = styled(Swiper)`
  width: 100%;
  height: 520px;

  .swiper-slide {
    img {
      height: 100%;
    }
  }
  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.color.primary_normal};
  }
`;

export const swiperSlide = styled(SwiperSlide)`
  img {
    width: 100%;
  }
`;
