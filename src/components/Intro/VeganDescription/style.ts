import styled from "styled-components";

export const DescriptionContaier = styled.div`
  text-align: center;
  font-family: "NanumSquareNeo";
  padding-bottom: 30px;
  margin: 0 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  div {
    color: ${({ theme }) => theme.color.primary_normal};
    margin-bottom: 25px;
  }
`;

export const SubTitle = styled.h3`
  @media ${({ theme }) => theme.windowSize.medium} {
    font-size: 16px;
  }
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 10px;

  span {
    background-color: #fdf89a;
    border-radius: 100%;
  }
`;

export const Descriptions = styled.p`
  @media ${({ theme }) => theme.windowSize.large} {
    font-size: 16px;
    line-height: 20px;
  }
  @media ${({ theme }) => theme.windowSize.medium} {
    font-size: 14px;
    line-height: 18px;
  }
  @media ${({ theme }) => theme.windowSize.small} {
    font-size: 12px;
    line-height: 16px;
  }
  span {
    display: inline-block;
    border-bottom: 1px rgba(255, 0, 0, 0.2);
    border-style: dotted;
    padding-bottom: 2px;
  }
`;
