import styled from "styled-components";

export const GiftContainer = styled.div`
  min-width: 375px;
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
