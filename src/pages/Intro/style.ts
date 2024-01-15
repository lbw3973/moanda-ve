import styled, { keyframes } from "styled-components";

const fadeInMove = keyframes`
0% {
  opacity: 0;
  right: -30vw;
}
100% {
  opacity: 1;
  right: 0;
}
`;

const fadeInMoveMobile = keyframes`
0% {
  opacity: 0;
  right: -50vw;
}
100% {
  opacity: 1;
  right: 0;
}
`;

export const IntroSection = styled.section`
  padding-top: 20px;
  margin: 0 auto;
  overflow: hidden;
  visibility: hidden;

  @media ${({ theme }) => theme.windowSize.large} {
    width: 1000px;
    padding: 20px 20px 0;
  }

  .visible {
    visibility: visible;
    opacity: 0;
    position: relative;
    right: -100px;
    @media ${({ theme }) => theme.windowSize.large} {
      animation: ${fadeInMove} 1s forwards;
    }
    @media ${({ theme }) => theme.windowSize.medium} {
      animation: ${fadeInMoveMobile} 1s forwards;
    }
  }
`;
