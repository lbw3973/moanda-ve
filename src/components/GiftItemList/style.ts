import styled from "styled-components";

export const GiftContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
    @media ${({ theme }) => theme.windowSize.medium} {
      max-width: 100%;
    }
  }
`;

export const GiftLine = styled.span`
  width: 100%;
  height: 1px;
  background-color: #7b5039;
  display: block;
  margin-bottom: 30px;
`;

export const GiftItems = styled.div`
  max-width: 100%;
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
  border: 1px solid #b1825e;
  padding: 0 40px;
  border-radius: 50px;
`;
export const GiftItemHeader = styled.div`
  font-size: large;
  margin: 20px 0;
  p {
    font-size: 40px;
    font-weight: bold;
    color: #b1825e;
    line-height: 40px;
    text-align: center;
    padding-top: 7px;
  }
`;
export const GiftItemBoxImg = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .swiper {
    border-top: 2px solid #b1825e;
    border-bottom: 2px solid #b1825e;
    /* border-radius: 20px; */
    padding: 15px 5px;
    display: flex;
    justify-content: center;
    width: 800px;
    @media ${({ theme }) => theme.windowSize.medium} {
      max-width: 390px;
    }
  }
  .swiperSlide {
    height: 312px;
    img {
      border-radius: 20px;
      width: 250px;
      height: 312px;
    }
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const GiftItemImg = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;

  justify-content: center;
  div {
    /* border: 2px solid #b1825e; */
    border-radius: 10px;
    width: 100%;

    padding: 10px;

    img {
      min-width: 180px;
      width: 100%;
      min-height: 250px;
      max-height: 350px;
      border-radius: 10px;
      border: 2px solid #b1825e;
    }

    div {
      margin-bottom: 10px;
      border: none;
      padding: 10px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      justify-content: center;

      h1 {
        white-space: nowrap;
        font-size: 18px;
        margin-bottom: 10px;

        color: #b1825e;
        text-align: center;
      }
      h2 {
        font-size: 16px;

        color: gray;
      }
    }
  }
  h1 {
    font-size: 20px;
  }
`;
