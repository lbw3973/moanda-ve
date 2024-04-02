import { Outlet } from "react-router-dom";
import * as S from "./style";
import Footer from "../Common/Footer";
import ScrollToTop from "../Common/ScrollToTop";
import { useScreenSizeStore } from "@/stores/screenSizeStore";
import { useEffect } from "react";
import Header from "../Common/Header";

const Layout = () => {
  const { setScreenSize } = useScreenSizeStore();

  const resizeEvent = () => {
    setScreenSize(window.innerWidth < 769);
  };
  useEffect(() => {
    window.addEventListener("resize", resizeEvent);

    return () => {
      window.removeEventListener("resize", resizeEvent);
    };
  }, []);

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
