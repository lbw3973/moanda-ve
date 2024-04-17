import styled from "styled-components";

export const GiftContainer = styled.div`
  min-width: 375px;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .poster {
    /* max-width: 100%; */
    width: 100%;
    @media ${({ theme }) => theme.windowSize.medium} {
      max-width: 100%;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 70%;
  min-height: 1000px;

  .poster {
    max-width: 100%;
    @media ${({ theme }) => theme.windowSize.medium} {
      max-width: 100%;
    }
  }
  .content {
    position: absolute;
    top: 43%;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    padding: 30px 40px;
    border: 1px solid ${({ theme }) => theme.color.primary_normal};
    border-style: dashed;
    border-radius: 25px;
    font-family: "NanumSquareNeo";

    h2 {
      text-align: center;
      font-size: 24px;
      color: ${({ theme }) => theme.color.primary_normal};
      font-weight: 600;
      margin-bottom: 30px;

      @media ${({ theme }) => theme.windowSize.large} {
        font-size: 22px;
      }
      @media ${({ theme }) => theme.windowSize.medium} {
        font-size: 20px;
      }
    }

    .notice-data {
      display: flex;
      flex-direction: column;
      gap: 20px;
      .box {
        display: grid;
        grid-template-columns: 120px 1fr;
        align-items: center;
        gap: 10px;

        @media ${({ theme }) => theme.windowSize.large} {
          grid-template-columns: 100px 1fr;
        }
        @media ${({ theme }) => theme.windowSize.medium} {
          grid-template-columns: 80px 1fr;
        }

        .key {
          color: #b1825e;
          font-weight: 600;
          font-size: 20px;
          white-space: nowrap;
          text-align: center;

          @media ${({ theme }) => theme.windowSize.large} {
            font-size: 18px;
          }
          @media ${({ theme }) => theme.windowSize.medium} {
            font-size: 16px;
          }
        }
        .value {
          color: #666;
          font-size: 16px;
          word-break: keep-all;
          line-height: 1.4;

          @media ${({ theme }) => theme.windowSize.large} {
            font-size: 14px;
          }
          @media ${({ theme }) => theme.windowSize.medium} {
            font-size: 12px;
          }
        }
      }
    }
  }
`;
