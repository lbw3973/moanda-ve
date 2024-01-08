import Header from "../Header";
import { Outlet } from "react-router-dom";
import * as S from "./style";
import Footer from "../Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <S.Main>
        <Outlet />
      </S.Main>
      <Footer />
    </>
  );
};

export default Layout;
