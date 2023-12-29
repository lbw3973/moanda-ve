import { useEffect, useState } from "react";
import * as S from "./style";
import Logo from "/Logo/Logo_remove_bg.png";
import { Link } from "react-router-dom";

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
          <Link to={"/intro"}>카페 소개</Link>
        </div>
        <div className="intro_menu">
          <Link to={"/menu"}>메뉴 소개</Link>
        </div>
        <div className="gallery">
          <Link to={"/gallery"}>갤러리</Link>
        </div>
        <div className="notice">
          <Link to={"/notice"}>공지사항</Link>
        </div>
      </S.Wrapper>
    </S.Container>
  );
};

export default Header;
