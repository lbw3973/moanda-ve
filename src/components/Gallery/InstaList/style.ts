import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  position: relative;
`;

export const ListWrapper = styled.div`
  padding: 20px 0;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-content: center;
  gap: 20px;
  max-width: 1280px;

  @media ${({ theme }) => theme.windowSize.medium} {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }
`;

export const SeeMoreContainer = styled.button`
  background-color: ${({ theme }) => theme.color.primary_normal};
  color: ${({ theme }) => theme.color.primary_light};
  padding: 16px 30px 16px 40px;
  font-family: "NanumSquareNeo";
  font-size: 24px;
  border-radius: 24px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 20px auto;
`;
