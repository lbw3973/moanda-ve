import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;

  background-color: rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.3s forwards ease-in-out;

  display: flex;
  justify-content: center;
  align-items: center;

  ::-webkit-scrollbar {
    display: block;
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.secondary_light};
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

export const Wrapper = styled.div<{ $scale: number }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 980px;

  display: flex;
  font-family: "NanumSquareNeo";

  .media {
    width: 600px;
    max-height: 800px;
    background-color: ${({ theme }) => theme.color.primary_normal};
    position: relative;
    video,
    img {
      position: initial;
      transform: none;
      width: 100%;
      height: 100%;
      /* object-fit: contain; */
    }
    .sound-button {
      position: absolute;
      bottom: 12px;
      right: 12px;
      padding: 8px;
      border-radius: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      background-color: rgba(0, 0, 0, 0.6);
    }
  }
  .content {
    width: 380px;
    height: auto;
    /* max-height: 800px; */
    overflow: hidden;
    background-color: ${({ theme }) => theme.color.primary_normal};
    color: ${({ theme }) => theme.color.primary_light};
    .title {
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 18px 24px 18px 22px;
      position: relative;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);

      .dateAndName {
        font-size: 18px;
        span {
          &:first-child {
            display: inline-block;
            margin-bottom: 6px;
          }
        }
      }

      .button-wrapper {
        display: flex;
        align-items: center;
        gap: 8px;

        svg {
          cursor: pointer;
        }
      }
    }

    .caption {
      padding: 36px 24px;
      max-height: calc(750px - 120px - 48px - 40px);
      overflow-y: scroll;
      word-break: keep-all;
      line-height: 1.3;

      .date {
        padding-top: 12px;
        font-size: 1.1rem;
        color: ${({ theme }) => theme.color.secondary_light};
      }
    }
  }

  @media screen and (max-width: 1100px) {
    transform: translate(-50%, -50%) ${({ $scale }) => `scale(${$scale})`};
  }

  @media ${({ theme }) => theme.windowSize.medium} {
    top: 0;
    left: 0;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    max-height: initial;
    transform: none;

    flex-direction: column;
    margin: 10px;
    padding: 20px 0 20px 8px;
    box-sizing: border-box;
    overflow-y: scroll;

    .title {
      background-color: ${({ theme }) => theme.color.primary_normal};
      color: ${({ theme }) => theme.color.primary_light};
      padding: 20px;
      display: flex;
      justify-content: space-between;

      .dateAndName {
        font-size: 18px;
        span {
          &:first-child {
            display: inline-block;
            margin-bottom: 6px;
          }
        }
      }

      .button-wrapper {
        display: flex;
        align-items: center;
        gap: 12px;

        svg {
          cursor: pointer;
        }
      }
    }

    .media {
      width: 100%;
      background-color: ${({ theme }) => theme.color.primary_light};
      video,
      img {
        position: initial;
        transform: none;
        width: 100%;
        height: 100%;
        max-height: 400px;
        object-fit: cover;
      }
    }

    .content {
      width: 100%;
      .caption {
        box-sizing: border-box;
        height: 100%;
      }
    }
  }
`;
