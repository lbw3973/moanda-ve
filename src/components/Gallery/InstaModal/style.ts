import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;

  background-color: rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.3s forwards ease-in-out;
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  background-color: white;

  display: grid;
  grid-template-columns: 5fr 2fr;
  grid-template-rows: 1fr 7fr;
  grid-template-areas:
    "media title"
    "media caption";

  @media ${({ theme }) => theme.windowSize.medium} {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: none;
  }

  .media {
    grid-area: media;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  #close {
    font-size: 30px;
  }
`;
