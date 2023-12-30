import styled from "styled-components";

export const Container = styled.header<{ $isScrolled: boolean }>`
  width: 100%;
  height: ${props => (props.$isScrolled === true ? "60px" : "80px")};

  position: fixed;
  top: 0;
  z-index: 10;
  background-color: #fff9eb;
  box-shadow: 0px 4px 13px -5px rgba(50, 50, 93, 0.25);

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 10px;

  font-family: "NanumSquareNeo";

  transition-duration: 300ms;

  /* 테블릿, 모바일 */
  @media ${({ theme }) => theme.windowSize.medium} {
    width: calc(100% - 20px);
  }
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
      @media (hover: hover) {
        &:hover {
          color: #654f43;
        }
      }
    }
  }

  /* 테블릿, 모바일 */
  @media ${({ theme }) => theme.windowSize.medium} {
    width: 100%;
    .logo {
      img {
        width: 90px;
      }
    }

    div {
      span {
        font-size: 14px;
      }
    }

    @media ${({ theme }) => theme.windowSize.small} {
      .logo {
        img {
          width: 75px;
        }
      }

      div {
        span {
          font-size: 12px;
        }
      }
    }
  }
`;
