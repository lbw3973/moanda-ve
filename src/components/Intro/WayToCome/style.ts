import styled from "styled-components";

export const LocationContainer = styled.div`
  font-family: "NanumSquareNeo";
  color: #242424;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  max-width: 1000px;

  @media ${({ theme }) => theme.windowSize.medium} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 100%;
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
    img {
      width: 200px;
      cursor: pointer;
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
    font-size: 12px;
  }
  width: 100%;
  .contact {
    a {
      display: none;
    }
  }

  @media ${({ theme }) => theme.windowSize.medium} {
    .contact {
      a {
        display: block;
      }
      span {
        display: none;
      }
    }
  }
`;
