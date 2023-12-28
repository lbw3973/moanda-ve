import React from "react";
import MenuDetail from "../../components/MenuDetail";

import * as S from "./style";

const Menu = () => {
  return (
    <S.MenuMain>
      <S.MenuItemTitle>Desert</S.MenuItemTitle>
      <MenuDetail />
      <S.MenuItemTitle>Beverage</S.MenuItemTitle>
      <MenuDetail />
    </S.MenuMain>
  );
};

export default Menu;
