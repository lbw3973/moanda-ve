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
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
