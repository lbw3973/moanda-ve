import styled, { css } from "styled-components";

interface IMenuModalContainerProps {
  $isOpen: boolean;
}

export const MenuModalSection = styled.section<IMenuModalContainerProps>`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  transform: translateY(${({ $isOpen }) => ($isOpen ? "0" : "100%")});
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-out;
`;
export const MenuModalContainer = styled.div<IMenuModalContainerProps>`
  min-width: 320px;
  min-height: 500px;
  position: relative;
  bottom: 0; // 화면 하단과 맞춤
  width: 30%;
  height: 70%; // 모달창의 높이를 조절하실 수 있습니다.
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 0 20px;
  box-sizing: border-box;
  overflow: auto;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.primary_light};

  transform: translateY(${({ $isOpen }) => ($isOpen ? "0" : "100%")});
`;

export const MenuModalImage = styled.img`
  width: 300px;
  height: 400px;
  margin-bottom: 30px;
  border-radius: 20px;
`;

export const MenuModalHeader = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  margin-bottom: 5px;
`;

export const MenuModalExit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 22px;
  height: 20px;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  right: 0;
`;

export const AreaElement = styled.span<{
  rotate: number;
  translate: number;
}>`
  width: 100%;
  height: 2px;
  background-color: black;
  ${props => css`
    rotate: ${props.rotate}deg;

    transform: translateY(${props.translate}px) translateX(-25%);
    background-color: black;
  `}
`;

export const MenuModalTitle = styled.h1`
  background-color: ${({ theme }) => theme.color.primary_normal};
  border: 1px solid #ddd;
  color: #eee;
  font-size: 20px;

  text-align: center;
  padding: 10px 40px;
  border-radius: 10px;
`;
