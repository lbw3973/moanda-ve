import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ClickArea = styled.button<{ isClicked: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 34px;
  height: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  .areaElement {
    width: 100%;
    height: 2px;
    background-color: #000;
    transition: all 200ms ease-out;
  }
`;

export const AreaElement = styled.span<{ index: number }>`
  width: 100%;
  height: 2px;
  background-color: #000;
  transition: all 200ms ease-out;
`;
