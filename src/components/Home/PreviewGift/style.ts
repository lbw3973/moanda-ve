import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  top: 0;
  height: calc(100vh - 80px);
  width: 100%;
  text-align: center;
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  height: 100%;
  max-width: 1280px;

  position: relative;
  padding: 0 60px;
  margin: 0 auto;
  overflow: hidden;

  h2 {
    position: absolute;
    top: 5%;
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

export const SwiperWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-20%, -50%);
  height: 80%;
  width: 100%;

  overflow: hidden;

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }

  .swiper {
    overflow: visible;
    .swiper-wrapper {
      align-items: end;
      overflow: hidden;
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
