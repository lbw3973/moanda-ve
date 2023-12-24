import Header from "../Header";
import { Outlet } from "react-router-dom";
import * as S from "./style";

const Layout = () => {
  return (
    <>
      <Header />
      <S.Page>
        <Outlet />
      </S.Page>
    </>
  );
};

export default Layout;
