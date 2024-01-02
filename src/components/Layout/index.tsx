import Header from "../Header";
import { Outlet } from "react-router-dom";
import * as S from "./style";

const Layout = () => {
  return (
    <>
      <Header />
      <S.Main>
        <Outlet />
      </S.Main>
    </>
  );
};

export default Layout;
