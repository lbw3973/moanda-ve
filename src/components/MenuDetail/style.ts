import styled from "styled-components";

export const StoreDetail = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  div {
    display: flex;
    margin: 10px;
  }
`;

export const MenuImage = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
