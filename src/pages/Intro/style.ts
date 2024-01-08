import styled from "styled-components";

export const IntroSection = styled.section`
  padding-top: 20px;
  margin: 0 auto;

  @media ${({ theme }) => theme.windowSize.large} {
    width: 1000px;
    padding: 20px 20px 0;
  }
`;
