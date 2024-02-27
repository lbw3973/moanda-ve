import styled, { keyframes } from "styled-components";

const cloud = keyframes`
  0%,100%{
    transform: translateY(0);
  }
  50%{
    transform: translateY(-8%);
  }
`;

export const DescriptionContaier = styled.div`
  text-align: center;
  font-family: "NanumSquareNeo";
  padding-bottom: 30px;
  margin: 0 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const LogoImage = styled.img`
  width: 300px;
  padding-bottom: 30px;
  animation: ${cloud} 3s ease-in-out infinite;

  @media ${({ theme }) => theme.windowSize.medium} {
    width: 250px;
  }

  @media ${({ theme }) => theme.windowSize.small} {
    width: 200px;
  }
`;

export const InformContainer = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.color.primary_normal};
  display: flex;
  flex-direction: column;
  gap: 10px;

  .solving {
    span {
      background-color: #fdf89a;
      border-radius: 100%;
    }
  }
  .first_des,
  .since {
    @media ${({ theme }) => theme.windowSize.medium} {
      font-size: 14px;
    }

    @media ${({ theme }) => theme.windowSize.small} {
      font-size: 12px;
    }
  }
  .since {
  }
`;
