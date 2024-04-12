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
  top: 8%;
  right: 35%;
  font-family: "TTLaundryGothicB";
  letter-spacing: 2px;
  font-size: 80px;
  font-weight: 600;
  line-height: 1.2;
  z-index: 10;
  text-align: left;

  @media ${({ theme }) => theme.windowSize.txlarge} {
    right: 20%;
  }

  @media ${({ theme }) => theme.windowSize.xlarge} {
    right: 10%;
  }

  span {
    display: block;
    padding-left: 120px;

    &::after {
      content: "";
      display: inline-block;
      width: 20px;
      height: 20px;
      background-color: red;
      margin-left: 16px;
    }
  }
`;

export const SwiperContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  height: 80%;
  margin-top: 120px;
`;

export const SwiperWrapper = styled.div`
  position: absolute;
  top: 50%;
  /* left: 5%; */

  transform: translateY(-50%);
  height: 80%;
  width: 100%;

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }

  .swiper {
    .swiper-wrapper {
      align-items: end;
      margin-left: 100px;
      .swiper-slide {
        width: 210px !important;
        height: 50%;
      }
      .swiper-slide-active {
        width: 520px !important;
        height: 100%;
      }
    }
  }
`;

export const SwiperPagination = styled.div`
  position: absolute;
  bottom: 40px;
  left: 160px;

  width: 400px;
  height: 60px;
  background-color: black;
`;
