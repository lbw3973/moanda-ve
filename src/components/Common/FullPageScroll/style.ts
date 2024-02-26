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

export const ProgressBarContainer = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  right: 100px;
  z-index: 10;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Elements = styled.div<{ $isCurrent: boolean }>`
  transition: background-color 500ms;
  background-color: ${({ $isCurrent }) => ($isCurrent ? "rgba(219,12,31,0.8)" : "white")};
  padding: 6px;
  border-radius: 100%;
  cursor: pointer;
  z-index: 20;
  position: relative;

  img {
    padding: 4px;
    width: 40px;
    height: 40px;
    position: relative;
    border-radius: 15px;
    z-index: 20;
  }
`;

export const VerticalBar = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 5px;
  height: 99%;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 10;
`;

export const FillVerticalBar = styled.div<{ $curFilled: number; $totalEls: number }>`
  width: 100%;
  transition-duration: 500ms;
  height: ${({ $curFilled, $totalEls }) => `calc(${($curFilled / ($totalEls - 1)) * 100}%)`};
  background-color: rgba(219, 12, 31, 0.5);
`;
