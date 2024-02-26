import styled from "styled-components";

export const FPSContainer = styled.div`
  height: calc(100vh - 80px);
  width: 100%;
  overflow-y: hidden;

  .fps_child {
    position: relative;
    top: 0;
    height: calc(100vh - 80px);
    width: 100%;

    img {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: auto;
      max-width: inherit;
      height: 100%;
    }
  }
`;
