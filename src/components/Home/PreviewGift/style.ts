import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: calc(100vh - 80px);
  width: 100%;
  text-align: center;
  overflow: hidden;
`;

export const GiftHeader = styled.h2`
  position: absolute;
  top: 10%;
  left: 50%;
  font-family: "TTLaundryGothicB";
  letter-spacing: 2px;
  font-size: 80px;
  font-weight: 600;
  line-height: 1.2;
  z-index: 10;
  text-align: left;

  span {
    display: block;
    padding-left: 120px;
    white-space: nowrap;
  }

  @media ${({ theme }) => theme.windowSize.txlarge} {
    left: 40%;
  }

  @media ${({ theme }) => theme.windowSize.xlarge} {
    left: 30%;
  }

  @media ${({ theme }) => theme.windowSize.large} {
    left: 20%;
  }

  @media ${({ theme }) => theme.windowSize.medium} {
    position: static;
    margin-top: 80px;
    font-size: 40px;
    padding: 0 20px;

    span {
      padding-left: 60px;
    }
  }
`;

export const SwiperContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  height: 80%;
  margin-top: 80px;

  @media ${({ theme }) => theme.windowSize.medium} {
    height: 100%;
  }
`;

export const SwiperWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  max-height: 550px;
  transform: translate(-50%, -50%);
  height: 80%;
  width: 100%;
  max-height: 550px;

  max-width: 1360px;
  overflow: hidden;

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }

  .swiper {
    .swiper-wrapper {
      align-items: end;
      margin-left: 92px;

      .swiper-slide {
        width: 215px !important;
        height: 50%;
        display: flex;
        justify-content: center;
        img {
          border-radius: 12px;
          width: 100%;
          height: 100%;
        }
      }
      .swiper-slide-active {
        width: 430px !important;
        height: 100%;
      }

      .swiper-slide-prev {
        visibility: hidden;
      }
    }
  }

  @media ${({ theme }) => theme.windowSize.medium} {
    position: static;
    transform: none;
    max-height: initial;
    height: 100%;
    width: 80%;
    margin: 0 auto;

    .swiper {
      .swiper-wrapper {
        margin-left: 0;
        .swiper-slide {
          width: 100% !important;
          height: 100%;
          display: flex;
          justify-content: center;
          img {
            border-radius: 12px;
            width: 70%;
            height: 100%;
          }
        }

        .swiper-slide-prev {
          visibility: visible;
        }
      }
    }
  }
`;

export const SwiperPagination = styled(Link)`
  position: absolute;
  bottom: -70px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  font-family: "NanumSquareNeo";
  font-size: 20px;
  white-space: nowrap;
  color: ${({ theme }) => theme.color.primary_light};
  padding: 20px 60px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.primary_normal};

  @media ${({ theme }) => theme.windowSize.xlarge} {
    left: 60%;
  }

  @media ${({ theme }) => theme.windowSize.large} {
    left: 70%;
  }
`;
