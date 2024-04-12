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

  @media ${({ theme }) => theme.windowSize.txlarge} {
    left: 40%;
  }

  @media ${({ theme }) => theme.windowSize.xlarge} {
    left: 30%;
  }

  @media ${({ theme }) => theme.windowSize.large} {
    left: 20%;
  }

  span {
    display: block;
    padding-left: 120px;
    white-space: nowrap;
  }
`;

export const SwiperContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  height: 80%;
  margin-top: 80px;
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
        /* margin-left: 6px; */
        width: 430px !important;
        height: 100%;
      }

      .swiper-slide-prev {
        visibility: hidden;
      }
    }
  }
`;

export const SwiperPagination = styled.div`
  position: absolute;
  bottom: 40px;
  left: 162px;

  width: 400px;
  height: 60px;
  background-color: black;
`;
