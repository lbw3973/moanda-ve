import styled from "styled-components";

export const Footer = styled.footer`
  color: ${({ theme }) => theme.color.secondary_light};
  box-shadow: 0 4px 4px 2px ${({ theme }) => theme.color.primary_normal};
  padding: 0 20px 20px;
  text-align: center;
  font-family: "NanumSquareNeo";
`;

export const Container = styled.div`
  font-size: 14px;
  @media ${({ theme }) => theme.windowSize.large} {
    max-width: 768px;
    min-width: 527px;
    margin-left: 10%;
  }
`;

export const CafeInfoContaier = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid rgba(123, 83, 57, 0.3);

  @media ${({ theme }) => theme.windowSize.large} {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 50px;

    img {
      width: 200px;
    }

    .cafeInfo {
      display: flex;
      flex-direction: column;
      align-items: start;

      .address,
      .contact {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 3px;
      }

      .address {
        margin-bottom: 14px;
      }

      .links {
        display: flex;
        gap: 10px;
        margin-top: 6px;
        img {
          width: 30px;
          border-radius: 6px;
          cursor: pointer;
        }
      }
    }
  }

  @media ${({ theme }) => theme.windowSize.medium} {
    .cafeInfo {
      div {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
      .address {
        margin: 14px 0;
      }

      .links {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 10px;
        margin-top: 6px;
        img {
          width: 30px;
          border-radius: 6px;
          cursor: pointer;
        }
      }
    }

    img {
      width: 120px;
    }
  }
`;

export const OwnerInfoContaier = styled.div`
  padding: 20px 0;
  @media ${({ theme }) => theme.windowSize.large} {
    display: flex;

    div {
      display: flex;
    }
    .ownerInfo::after {
      content: "";
      display: block;
      width: 1px;
      height: 100%;
      background-color: ${({ theme }) => theme.color.secondary_light};
      margin: 0 8px;
    }
  }
  @media ${({ theme }) => theme.windowSize.medium} {
    .ownerInfo {
      margin-bottom: 5px;
    }
  }
`;
