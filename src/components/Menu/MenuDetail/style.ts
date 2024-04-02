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

export const MenuDetailContainer = styled.div`
  visibility: hidden;
  .visible {
    visibility: visible;
    opacity: 0;
    animation: ${fadeInMove} 1.5s forwards ease-in-out;

    @media ${({ theme }) => theme.windowSize.small} {
      animation: ${fadeInMove} 1.5s forwards ease-in-out;
    }
  }
`;

export const MenuDetailDiv = styled.div``;

export const StoreDetail = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 30px;
  margin-bottom: 50px;

  @media ${({ theme }) => theme.windowSize.xlarge} {
    grid-template-columns: repeat(5, 1fr);
  }
  @media ${({ theme }) => theme.windowSize.large} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media ${({ theme }) => theme.windowSize.medium} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 10px;
  }

  div {
    display: flex;
    margin: 10px;
  }
`;

export const MenuImage = styled.img`
  border-radius: 50%;
  width: 160px;
  height: 160px;

  @media ${({ theme }) => theme.windowSize.xlarge} {
    width: 160px;
    height: 160px;
  }
  @media ${({ theme }) => theme.windowSize.large} {
    width: 150px;
    height: 150px;
  }
  @media ${({ theme }) => theme.windowSize.medium} {
    width: 160px;
    height: 160px;
  }
  @media ${({ theme }) => theme.windowSize.small} {
    width: 130px;
    height: 130px;
  }
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
    color: #808080;
  }

  transition: all 0.1s ease-in-out;

  @media (min-width: 768px) {
    &:hover {
      opacity: 0.5;
    }
  }
`;

export const MenuItemTitle = styled.h1`
  font-size: 20px;
  line-height: 20px;
  font-weight: 600;
  color: #fafafa;
  white-space: nowrap;
  background-color: #7b5339;
  padding: 8px 30px;
  border-radius: 30px;
`;
export const MenuItemTitles = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  p {
    width: 50%;
    background-color: #d3a47f;
    height: 3px;
  }
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
