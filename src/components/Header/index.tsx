import { useEffect, useState } from "react";
import * as S from "./style";
import Logo from "/Logo/Logo.jpg";
import HamburgerMenu from "../HamburgerMenu";
import { Link } from "react-router-dom";

const Menus = {
  intro: "카페 소개",
  menu: "메뉴 소개",
  gallery: "갤러리",
  notice: "공지사항",
};

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPosition(window.scrollY > 1);
    });
  }, []);

  return (
    <S.Container $isScrolled={scrollPosition}>
      <HamburgerMenu isClicked={isClicked} setIsClicked={setIsClicked} />
      <S.Wrapper>
        <img src={Logo} alt="로고" />
        <S.Menus $isClicked={isClicked}>
          <div className="toHome">
            <Link to={"/"} onClick={() => setIsClicked(false)}>
              HOME
            </Link>
          </div>
          {Object.entries(Menus).map(([key, value]) => (
            <div className={key} key={key}>
              <Link to={`/${key}`} onClick={() => setIsClicked(false)}>
                {value}
              </Link>
            </div>
          ))}
        </S.Menus>
      </S.Wrapper>
      <S.WindowSizeMobile></S.WindowSizeMobile>
    </S.Container>
  );
};

export default Header;
