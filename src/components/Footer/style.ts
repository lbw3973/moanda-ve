import styled from "styled-components";

export const Footer = styled.footer`
  color: ${({ theme }) => theme.color.secondary_light};
  box-shadow: 0 -4px 4px -5px ${({ theme }) => theme.color.primary_normal};
  padding: 0 20px 20px;
  margin-top: 20px;
  text-align: center;
  font-family: "NanumSquareNeo";
`;

export const Container = styled.div`
  font-size: 14px;

  max-width: 768px;
  min-width: 527px;
  margin: 0 auto;
  .copyright {
    text-align: start;
  }

  @media ${({ theme }) => theme.windowSize.medium} {
    max-width: initial;
    min-width: initial;
    margin: initial;

    .copyright {
      text-align: center;
    }
    font-size: 12px;
  }
`;

export const CafeInfoContaier = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid rgba(123, 83, 57, 0.3);

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

  @media ${({ theme }) => theme.windowSize.medium} {
    display: block;
    .cafeInfo {
      display: block;
      div {
        display: flex;
        flex-direction: column;
        align-items: center !important;
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
  display: flex;
  white-space: nowrap;

  div {
    display: flex;
  }
  .ownerInfo::after,
  .businessInfo::after {
    content: "";
    display: block;
    width: 1px;
    height: 100%;
    background-color: ${({ theme }) => theme.color.secondary_light};
    margin: 0 8px;
  }
  .developer {
    gap: 5px;
  }

  @media ${({ theme }) => theme.windowSize.medium} {
    display: block;
    font-size: 12px;
    div {
      display: block;
    }
    .ownerInfo {
      margin-bottom: 5px;
    }
    .developer {
      display: flex;
      flex-direction: column;
      margin-top: 5px;
      gap: 5px;
    }
  }
`;
