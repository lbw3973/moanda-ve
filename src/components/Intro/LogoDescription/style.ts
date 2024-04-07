import styled, { keyframes } from "styled-components";

const cloud = keyframes`
  0%,100%{
    transform: translateY(0);
  }
  50%{
    transform: translateY(-8%);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0 20px;
  padding: 20px 0;

  @media ${({ theme }) => theme.windowSize.large} {
    gap: 20px;
  }

  @media ${({ theme }) => theme.windowSize.medium} {
    flex-direction: column-reverse;
    margin: 0;
  }
`;

export const DescriptionContaier = styled.div`
  text-align: center;
  font-family: "NanumSquareNeo";
  padding-bottom: 30px;
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

export const InformWrapper = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.color.primary_normal};
  display: flex;
  flex-direction: column;
  gap: 10px;
  white-space: nowrap;

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

export const ImageContainer = styled.div`
  width: 40%;
  height: 30%;
  min-width: 370px;
  max-width: 650px;
  filter: brightness(1.15) saturate(1.4);

  @media ${({ theme }) => theme.windowSize.xlarge} {
    width: 50%;
  }

  @media ${({ theme }) => theme.windowSize.large} {
    width: 70%;
  }

  @media ${({ theme }) => theme.windowSize.medium} {
    width: 100%;
  }

  img {
    width: 100%;
  }
`;

export const PlaceholderImage = styled.img<{ $loaded: boolean }>`
  filter: blur(10px);
  opacity: ${({ $loaded }) => ($loaded ? 0 : 1)};
`;
