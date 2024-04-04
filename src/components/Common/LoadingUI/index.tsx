import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url("/loading.gif");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 150px;
  height: 150px;
`;

const LoadingUI = () => {
  return (
    <Container>
      <Wrapper />
    </Container>
  );
};

export default LoadingUI;
