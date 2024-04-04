import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 80px;
  font-family: "NanumSquareNeo";
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px rgba(0, 0, 0, 0.12);
  border-radius: 6px;
  padding: 20px;
  cursor: pointer;

  @media ${({ theme }) => theme.windowSize.medium} {
    flex-direction: column-reverse;
    gap: 20px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  line-height: 1.2;

  h1 {
    font-size: 18px;
    font-weight: 700;
  }

  .date {
    font-size: 12px;
    color: #888;
  }
`;

export const ImageWrapper = styled.div`
  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 6px;

    @media ${({ theme }) => theme.windowSize.medium} {
      width: 100%;
      height: 100%;
    }
  }
`;
