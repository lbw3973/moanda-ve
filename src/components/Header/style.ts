import styled from "styled-components";

export const Container = styled.div<{ $isScrolled: boolean }>`
  width: 100%;
  height: ${props => (props.$isScrolled === true ? "60px" : "80px")};

  position: fixed;
  top: 0;
  z-index: 10;
  background-color: ${props => (props.$isScrolled === true ? "#fff9eb" : "transparent")};
  ${props => props.$isScrolled && "box-shadow: 0px 4px 13px -5px rgba(50,50,93,0.25);"}
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "NanumSquareNeo";

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
      width: 120px;
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
