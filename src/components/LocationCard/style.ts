import styled from "styled-components";

export const LocationCardContainer = styled.div`
  position: relative;
  z-index: 0;
  height: 280px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;

  @media ${({ theme }) => theme.windowSize.large} {
    width: 50%;
  }
  @media ${({ theme }) => theme.windowSize.medium} {
    width: 90%;
  }
`;
