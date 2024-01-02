import styled from "styled-components";

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
  transition: all 0.3s ease-out;
  background-color: gray;
`;
export const MenuModalContainer = styled.div`
  position: fixed;
  bottom: 0; // 화면 하단과 맞춤
  width: 90%;
  height: 90%; // 모달창의 높이를 조절하실 수 있습니다.
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 20px;
  box-sizing: border-box;
  overflow: auto;
  border-radius: 10px;
`;

export const MenuModalImage = styled.img`
  width: 300px;
  height: 400px;
  margin-bottom: 30px;
`;

export const MenuModalHeader = styled.div`
  width: 90%;
  height: 5%;
  display: flex;
  justify-content: center;
`;

export const MenuModalExit = styled.div`
  width: 20px;
  position: fixed;
  right: 30px;
`;
