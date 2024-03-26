import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const swiper = styled(Swiper)<{ $width: string; $height: string; $isBlack: boolean }>`
  width: ${({ $width }) => $width};
  position: relative;

  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.color.primary_normal};
  }
  height: ${({ $height }) => $height};
  overflow-y: hidden;

  .swiper-slide {
    width: auto;
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

  .swiper-button-prev,
  .swiper-button-next {
    margin: 0 30px;
    color: ${({ $isBlack }) => ($isBlack ? "black" : "white")};
    &::after {
      font-size: 60px;
    }
  }
`;

export const swiperSlide = styled(SwiperSlide)`
  img {
    width: 100%;
  }
`;

export const NavigationBar = styled.div`
  position: absolute;
  z-index: 100;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 50px;
  border-radius: 12px;

  background-color: rgba(0, 0, 0, 0.6);
  line-height: 50px;

  p {
    display: flex;
    justify-content: center;
    gap: 10px;
    font-family: "NanumSquareNeo";
    color: white;

    span {
      text-align: center;
      width: 10%;
    }
  }
`;
