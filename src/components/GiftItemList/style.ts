import styled from "styled-components";

export const GiftContainer = styled.div`
  max-width: 1000px;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    max-width: 70%;
    @media ${({ theme }) => theme.windowSize.medium} {
      max-width: 100%;
    }
  }
`;

export const GiftLine = styled.span`
  width: 90%;
  height: 1px;
  background-color: #7b5039;
  display: block;
  margin-bottom: 30px;
`;

export const GiftItems = styled.div`
  max-width: 70%;
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "GmarketSans", serif;
  font-weight: 400;
  font-style: normal;
  span {
  }
  h1 {
    font-size: 50px;
  }
  h2 {
    font-size: 13px;
  }
  @media ${({ theme }) => theme.windowSize.medium} {
    max-width: 100%;
  }
`;

export const GiftItem = styled.div`
  margin: 100px 0;
  font-family: "GmarketSans", serif;
`;
export const GiftItemHeader = styled.div`
  font-size: large;
  margin: 10px 0;
`;
export const GiftItemBoxImg = styled.div`
  width: 80%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  gap: 5px;
  .swiper {
    display: flex;
    justify-content: center;
    max-width: 700px;

    @media ${({ theme }) => theme.windowSize.medium} {
      max-width: 390px;
    }
  }
  .swiperSlide {
    img {
      width: 200px;
      height: auto;
    }
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const GiftItemImg = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  h1 {
    font-size: 20px;
  }
  img {
    width: 33%;
    height: auto;
  }
`;
