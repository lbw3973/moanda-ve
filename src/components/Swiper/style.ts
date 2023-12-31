import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const temp = styled.div``;

export const swiper = styled(Swiper)`
  width: 100%;

  .swiper-slide {
    img {
      height: 100%;
    }
  }
  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.color.primary_normal};
  }
  @media ${({theme}) => theme.windowSize.medium} {
    height: 520px;
  }
`;

export const swiperSlide = styled(SwiperSlide)`
  img {
    width: 100%;
  }
`;
