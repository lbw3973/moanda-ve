import styled from "styled-components";

export const Container = styled.div<{ $isScrolled: boolean }>`
  width: 100%;
  height: 80px;

  position: fixed;
  top: 0;
  z-index: 10;
  background-color: ${props => (props.$isScrolled === true ? "#fff9eb" : "transparent")};
  display: flex;
  justify-content: center;
  align-items: center;

  transition-duration: 500ms;
`;

export const Wrapper = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: 600;

  .logo {
    img {
      height: 80px;
    }
  }

  div {
    span {
      color: #242424;
      cursor: pointer;
      padding: 4px;
      transition-duration: 300ms;
      &:hover {
        color: #654f43;
      }
    }
  }
`;
