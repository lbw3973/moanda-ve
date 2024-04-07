import styled from "styled-components";

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
    flex-direction: column;
    margin: 0;
  }
`;

export const DescriptionContaier = styled.div`
  text-align: center;
  font-family: "NanumSquareNeo";
  padding-bottom: 30px;
  margin: 0 20px;
  white-space: nowrap;

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
  font-size: 16px;
  line-height: 20px;
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

export const ImageContainer = styled.div`
  width: 40%;
  height: 30%;
  min-width: 370px;
  max-width: 650px;
  filter: brightness(1.1) saturate(1.4);

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

export const HighQualityImage = styled.img<{ $loaded: boolean }>`
  width: 100%;
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
`;

export const PlaceholderImage = styled.img<{ $loaded: boolean }>`
  width: 100%;
  filter: blur(10px);
  opacity: ${({ $loaded }) => ($loaded ? 0 : 1)};
`;
