import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0 20px;
  font-family: "GmarketSans";
  font-size: 40px;
  color: ${({ theme }) => theme.color.primary_normal};

  @media ${({ theme }) => theme.windowSize.medium} {
    font-size: 30px;
  }

  @media ${({ theme }) => theme.windowSize.small} {
    font-size: 24px;
  }

  h2::after {
    content: "";
    display: block;
    width: 75%;
    height: 1px;
    margin-top: 10px;
    background-color: rgba(0, 0, 0, 0.2);
    transform: translateX(15%);
  }
`;
