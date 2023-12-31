import styled, { css } from "styled-components";

export const Container = styled.div`
  @media ${({ theme }) => theme.windowSize.large} {
    display: none;
  }
  display: flex;
  align-items: center;
  z-index: 50;
`;

export const ClickArea = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 34px;
  height: 28px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const AreaElement = styled.span<{
  $isClicked: boolean;
  index: number;
  rotate: number;
  opacity: number;
  translate: number;
}>`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.color.primary_normal};
  transition: all 200ms ease-out;

  ${props =>
    props.$isClicked &&
    css`
      rotate: ${props.rotate}deg;
      opacity: ${props.opacity};
      transform: translateY(${props.translate}px) translateX(-25%);
      width: 105%;
      background-color: ${({ theme }) => theme.color.primary_light};
    `}
`;
