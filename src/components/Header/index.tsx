import { useEffect, useState } from "react";
import * as S from "./style";
import Logo from "/Logo/Logo_remove_bg.png";
import HamburgerMenu from "../HamburgerMenu";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPosition(window.scrollY > 1);
    });
  }, []);

  return (
    <S.Container $isScrolled={scrollPosition}>
      <S.Wrapper>
        <div className="logo">
          <img src={Logo} alt="로고" />
        </div>
        <div className="intro_cafe">
          <span>카페 소개</span>
        </div>
        <div className="intro_menu">
          <span>메뉴 소개</span>
        </div>
        <div className="gallery">
          <span>갤러리</span>
        </div>
        <div className="notice">
          <span>공지사항</span>
        </div>
      </S.Wrapper>
      <HamburgerMenu />
    </S.Container>
  );
};

export default Header;
