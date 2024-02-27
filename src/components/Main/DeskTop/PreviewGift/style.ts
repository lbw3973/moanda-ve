import styled from "styled-components";

export const Container = styled.div`
  @media ${({ theme }) => theme.windowSize.large} {
    position: relative;
    top: 0;
    height: calc(100vh - 80px);
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 60%;

  overflow: hidden;
`;
