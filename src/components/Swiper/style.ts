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
  @media ${({ theme }) => theme.windowSize.large} {
    height: calc(100vh - 80px);
    overflow-y: hidden;

    .swiper-slide-active {
      position: relative;
      top: 0;
      height: calc(100vh - 80px);
      width: 100%;

      img {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: auto;
        max-width: inherit;
        height: 100%;
      }
    }
  }
  @media ${({ theme }) => theme.windowSize.medium} {
    height: 100%;
  }
`;

export const swiperSlide = styled(SwiperSlide)`
  img {
    width: 100%;
  }
`;
