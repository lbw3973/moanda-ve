import styled from "styled-components";

export const GiftContainer = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .poster {
    max-width: 70%;
    @media ${({ theme }) => theme.windowSize.medium} {
      max-width: 100%;
    }
  }
`;

export const GiftItems = styled.div`
  max-width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media ${({ theme }) => theme.windowSize.medium} {
    max-width: 100%;
  }
`;
export const GiftItemHeader = styled.div`
  font-size: large;
  margin: 10px 0;
`;
export const GiftItemBoxImg = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  gap: 5px;
  img {
    max-width: 45%;
  }
`;
