import { useEffect, useState } from "react";
import * as S from "./style";
import Logo from "/Logo/Logo.jpg";
import HamburgerMenu from "../HamburgerMenu";
import { Link, NavLink } from "react-router-dom";

const Menus = {
  intro: "모앤더비 소개",
  menu: "메뉴 소개",
  gift: "답례품",
  gallery: "갤러리",
};

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPosition(window.scrollY > 88);
    });
  }, []);

  return (
    <S.Container $isScrolled={scrollPosition}>
      <HamburgerMenu isClicked={isClicked} setIsClicked={setIsClicked} />
      <S.Wrapper>
        <Link to={"/"}>
          <img src={Logo} alt="로고" />
        </Link>
        <S.Menus $isClicked={isClicked}>
          <div className="toHome">
            <NavLink
              to={"/"}
              onClick={() => setIsClicked(false)}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              HOME
            </NavLink>
          </div>
          {Object.entries(Menus).map(([key, value]) => (
            <div className={key} key={key}>
              <NavLink
                to={`/${key}`}
                onClick={() => setIsClicked(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {value}
              </NavLink>
            </div>
          ))}
          <div className="mobile_wrapper" onClick={() => setIsClicked(false)}></div>
        </S.Menus>
      </S.Wrapper>
      <S.WindowSizeMobile></S.WindowSizeMobile>
    </S.Container>
  );
};

export default Header;
