import React from "react";
import MenuDetail from "../../components/MenuDetail";

import * as S from "./style";

const Menu = () => {
  return (
    <S.MenuMain>
      <S.MenuItemTitle>비건휘낭시에</S.MenuItemTitle>
      <MenuDetail />
      <S.MenuItemTitle>비건쿠키</S.MenuItemTitle>
      <MenuDetail />
    </S.MenuMain>
  );
};

export default Menu;
