import styled from "styled-components";
import { keyframes } from "styled-components";
interface IModalProps {
  isOpen: boolean;
}

const fadeInMove = keyframes`
0% {
  opacity: 0;

}
100% {
  opacity: 1;

}
`;

const fadeInMoveMobile = keyframes`
0% {
  opacity: 0;

}
100% {
  opacity: 1;

}
`;

export const MenuDetailContainer = styled.div`
  visibility: hidden;
  .visible {
    visibility: visible;
    opacity: 0;
    @media ${({ theme }) => theme.windowSize.large} {
      animation: ${fadeInMove} 1.5s forwards ease-in-out;
    }
    @media ${({ theme }) => theme.windowSize.medium} {
      animation: ${fadeInMoveMobile} 1.5s forwards ease-in-out;
    }
  }
`;

export const MenuDetailDiv = styled.div``;

export const StoreDetail = styled.div`
  display: grid;

  @media ${({ theme }) => theme.windowSize.medium} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media ${({ theme }) => theme.windowSize.small} {
    grid-template-columns: repeat(2, 1fr);
  }
  grid-template-columns: repeat(6, 1fr);
  margin-bottom: 30px;

  div {
    display: flex;
    margin: 10px;
  }
`;

export const MenuImage = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  h2 {
    width: 120px;
    text-align: center;
  }

  transition: all 0.1s ease-in-out;
  &:hover {
    opacity: 0.5;
  }
`;

export const MenuItemTitle = styled.h1`
  width: 320px;
  height: 40px;
  font-size: 30px;
  border-bottom: 1px solid #999;
  font-weight: bold;
  font-family: "NanumSquareNeo";
  margin-top: 30px;
`;

export const MenuModal = styled.div<IModalProps>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%; // 모달창의 높이를 조절하실 수 있습니다.
  background: white;
  transform: translateY(${({ isOpen }) => (isOpen ? "0" : "100%")});
  transition: transform 0.3s ease-in-out;
  padding: 20px;
  box-sizing: border-box;
  overflow: auto;
`;
