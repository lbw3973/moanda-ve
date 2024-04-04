import styled from "styled-components";

export const Container = styled.div<{ $isHovered: boolean }>`
  position: relative;
  background-color: #eee;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.01);
  box-sizing: border-box;

  video,
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition-duration: 500ms;
    filter: ${({ $isHovered }) => ($isHovered ? "brightness(0.4)" : "none")};
    transform: ${({ $isHovered }) => ($isHovered ? "scale(1.1)" : "scale(1.0)")};
  }
`;

export const SVGWrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 6px 12px;
  background-color: rgba(0, 0, 0, 0.4);

  @media ${({ theme }) => theme.windowSize.small} {
    padding: 4px 8px;
    top: 8px;
    right: 8px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const PreviewCaption = styled.div<{ $isHovered: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  opacity: ${({ $isHovered }) => ($isHovered ? 1 : 0)};
  transform: ${({ $isHovered }) => ($isHovered ? "scale(1.1)" : "scale(1.0)")};
  box-sizing: border-box;
  transition-duration: 500ms;
  display: flex;
  justify-content: center;
  align-items: center;

  .caption {
    overflow: hidden;
    font-size: 20px;
    color: ${({ theme }) => theme.color.primary_light};
    line-height: 1.2;
    text-align: center;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 8;

    @media ${({ theme }) => theme.windowSize.large} {
      -webkit-line-clamp: 7;
      font-size: 18px;
    }

    @media ${({ theme }) => theme.windowSize.medium} {
      font-size: 18px;
    }

    @media screen and (max-width: 540px) {
      -webkit-line-clamp: 6;
      font-size: 16px;
    }

    @media ${({ theme }) => theme.windowSize.small} {
      -webkit-line-clamp: 5;
      font-size: 14px;
    }
  }
`;
