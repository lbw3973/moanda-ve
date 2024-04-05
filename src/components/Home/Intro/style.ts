import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  .swiper-slide {
    background-color: #e7e2dc;
    display: flex;
    justify-content: center;
  }
`;

export const FirstSlide = styled.div`
  padding: 0 20px;
`;

export const FirstSlideImg = styled.div`
  background-color: #e7e2dc;
  display: flex;
  justify-content: center;
  width: 100%;

  img {
    height: fit-content;
    width: fit-content;
  }
  div {
    position: relative;
  }

  @media ${({ theme }) => theme.windowSize.xlarge} {
    flex-direction: column;
    align-items: center;
    img {
      height: 100%;
      width: 100%;
    }
  }
`;

export const FirstSlideText = styled.div`
  position: absolute;
  top: 200px;
  left: 0;
  font-size: 14px;
  font-family: "NanumSquareNeo";
  line-height: 25px;
  word-break: keep-all;
  h1 {
    font-weight: 600;
  }
  @media ${({ theme }) => theme.windowSize.xlarge} {
    top: -50px;
  }
`;

export const SecondSlide = styled.div`
  background-color: #b19f7f;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    max-width: 1000px;
    max-height: 1000px;
  }
  div {
    display: none;
  }

  @media ${({ theme }) => theme.windowSize.xlarge} {
    div {
      display: flex;
      flex-direction: column;

      text-align: center;
      h1 {
        text-align: center;
      }
    }
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
