import styled from "styled-components";

export const LocationContainer = styled.div`
  font-family: "NanumSquareNeo";
  color: #242424;

  @media ${({ theme }) => theme.windowSize.large} {
    height: 280px;
    display: flex;
    gap: 20px;
  }
  @media ${({ theme }) => theme.windowSize.medium} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const InformContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  padding-top: 10px;

  div {
    margin-bottom: 25px;
    h3 {
      font-weight: 600;
      margin-bottom: 8px;
    }
    span,
    a {
      font-size: 14px;
      line-height: 20px;
    }
  }
  .contact {
    span,
    a {
      cursor: pointer;
      svg {
        margin-left: 6px;
        transform: translateY(2px);
      }
    }
  }
  .clickNotice {
    color: ${({ theme }) => theme.color.primary_normal};
    font-weight: 600;
  }

  @media ${({ theme }) => theme.windowSize.large} {
    width: 50%;
    .contact {
      a {
        display: none;
      }
    }
  }

  @media ${({ theme }) => theme.windowSize.medium} {
    .contact {
      span {
        display: none;
      }
    }
  }
`;