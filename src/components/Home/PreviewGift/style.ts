import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  h2 {
    position: absolute;
    top: 5%;
    font-family: "Catamaran";
    letter-spacing: 2px;
    font-size: 80px;
    font-weight: 600;
    line-height: 1.2;
    z-index: 100;
    text-align: left;

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
  width: 100%;
  height: 1000px;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  .swiper {
    position: absolute;
    left: -500px;
    width: 100%;
    height: 500px;
    .swiper-wrapper {
      .swiper-slide {
      }
      .swiper-slide-active {
        img {
          width: 400px;
        }
      }
    }
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
