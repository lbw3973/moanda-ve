import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const swiper = styled(Swiper)<{ $width: string; $height: string }>`
  width: ${({ $width }) => $width};

  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.color.primary_normal};
  }
  @media ${({ theme }) => theme.windowSize.large} {
    height: ${({ $height }) => $height};
    overflow-y: hidden;

    .swiper-slide {
      img {
        height: 100%;
      }
    }

    .swiper-slide-active {
      position: relative;
      top: 0;
      height: ${({ $height }) => $height};

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
