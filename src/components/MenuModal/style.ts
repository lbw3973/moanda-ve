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
  transition: opacity 0.3s ease-out;
`;
export const MenuModalContainer = styled.div<IMenuModalContainerProps>`
  min-width: 320px;
  min-height: 500px;
  position: relative;
  bottom: 0;
  width: 30%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  overflow: auto;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.primary_light};
  transition: all 0.3s ease-out;
  transform: translateY(${({ $isOpen }) => ($isOpen ? "0" : "100%")});

  h3 {
    @media ${({ theme }) => theme.windowSize.small} {
      font-size: small;
    }
    width: 100%;
    text-align: center;
    line-height: 20px;
  }
`;

export const MenuModalImage = styled.img`
  width: 300px;
  height: 400px;
  margin-top: 10px;
  margin-bottom: 15px;
  border-radius: 20px;
  @media ${({ theme }) => theme.windowSize.small} {
    width: 150px;
    height: 200px;
  }
`;

export const MenuModalHeader = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  margin: 10px 0;
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

export const MenuModalImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  font-size: 20px;
  text-align: center;
  border-radius: 10px;
  font-weight: bold;
  position: relative;
`;

export const MenuModalTitleDesign = styled.span`
  width: 100%;
  height: 20px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #bedd9c;
  border-radius: 100px;
  rotate: -10deg;
  translate: 4px;
  z-index: 1;
`;

export const MenuModalTitleName = styled.span`
  z-index: 100;
  position: relative;

  h2 {
    position: absolute;
    font-size: 12px;
    color: gray;
    bottom: -15px;
    right: 0;
  }
`;

export const MenuModalDesTitle = styled.div`
  width: 130px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
`;
export const MenuModalDes = styled.h3``;

export const MenuModalWarning = styled.h3`
  @media ${({ theme }) => theme.windowSize.small} {
    margin: 5px 0 0 0;
  }
  margin: 30px 0px;
  color: red;
`;

export const MenuModalIngredient = styled.h3`
  color: gray;
`;

export const MenuModalNaver = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  margin-top: 15px;
  padding: 2px 0;
  border: 1px solid #ccc;
  border-radius: 10px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
  }
  h1 {
    margin-top: 9px;
    margin-left: 10px;
    font-size: small;
  }
`;
