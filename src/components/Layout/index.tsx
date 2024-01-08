import Header from "../Header";
import { Outlet } from "react-router-dom";
import * as S from "./style";
import Footer from "../Footer";
import ScrollToTop from "../Common/ScrollToTop";

const Layout = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <S.Main>
        <Outlet />
      </S.Main>
      <Footer />
    </>
  );
};

export default Layout;
