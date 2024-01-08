import styled from "styled-components";

export const Container = styled.header<{ $isScrolled: boolean }>`
  width: 100%;
  height: ${({ $isScrolled }) => ($isScrolled ? "60px" : "80px")};

  position: fixed;
  top: 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.color.primary_light};
  box-shadow: 0px 4px 13px -5px rgba(50, 50, 93, 0.25);

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 10px;

  font-family: "NanumSquareNeo";

  transition-duration: 300ms;

  /* Tablet, Mobile */
  @media ${({ theme }) => theme.windowSize.medium} {
    width: calc(100vw - 20px);
    justify-content: space-between;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  /* PC */
  @media ${({ theme }) => theme.windowSize.large} {
    width: 1000px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;

    img {
      width: 120px;
    }

    div {
      a {
        color: #242424;
        cursor: pointer;
        padding: 4px;
        @media (hover: hover) {
          &:hover {
            color: ${({ theme }) => theme.color.primary_normal};
          }
        }
      }
    }
    .toHome {
      display: none;
    }
  }

  /* Tablet */
  @media ${({ theme }) => theme.windowSize.medium} {
    a {
      img {
        width: 90px;
      }
    }

    div {
      a {
        font-size: 14px;
      }
    }
  }

  /* Mobile */
  @media ${({ theme }) => theme.windowSize.small} {
  }
`;

export const Menus = styled.div<{ $isClicked: boolean }>`
  /* PC */
  @media ${({ theme }) => theme.windowSize.large} {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  /* Tablet, Mobile */
  @media ${({ theme }) => theme.windowSize.medium} {
    visibility: ${({ $isClicked }) => ($isClicked ? "inherit" : "hidden")};
    position: fixed;
    top: 0;
    left: 0;
    width: 140px;
    height: 100%;

    padding-top: 25%;
    background-color: ${({ theme }) => theme.color.primary_normal};
    opacity: ${({ $isClicked }) => ($isClicked ? "1" : "0")};
    transition: all 0.3s ease-in-out;

    div {
      width: 100%;
      height: 56px;
      text-align: center;
      transform: translateY(${({ $isClicked }) => ($isClicked ? "0%" : "-100%")});
      transition: transform 0.3s ease-in-out;
      a {
        color: ${({ theme }) => theme.color.primary_light};
      }
    }
  }
`;

export const WindowSizeMobile = styled.div`
  @media ${({ theme }) => theme.windowSize.medium} {
    width: 34px;
    height: 100%;
  }
`;
