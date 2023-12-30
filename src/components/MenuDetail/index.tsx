import React from "react";
import * as S from "./style";

const menuItems = [
  { src: "../../../public/Main/1.jpg", name: "바닐라" },
  { src: "../../../public/Main/2.jpg", name: "소금초코" },
  { src: "../../../public/Main/3.jpg", name: "단호박떡" },
  { src: "../../../public/Main/4.jpg", name: "캐러멜피칸" },
  { src: "../../../public/Main/5.jpg", name: "고구마" },
  { src: "../../../public/Main/6.jpg", name: "호두과자" },
  { src: "../../../public/Main/7.jpg", name: "레몬" },
  { src: "../../../public/Main/8.jpg", name: "얼그레이초코" },
  // 추가하고 싶은 메뉴 아이템을 이렇게 추가하면 됩니다.
];

const MenuDetail = () => {
  return (
    <S.StoreDetail>
      {menuItems.map((item, index) => (
        <div key={index}>
          <S.MenuItem>
            <S.MenuImage src={item.src} alt="메뉴 이미지" />
            <h2>{item.name}</h2>
          </S.MenuItem>
        </div>
      ))}
    </S.StoreDetail>
  );
};

export default MenuDetail;

{
  /* <div>
        <S.MenuItem>
          <S.MenuImage src="../../../public/Main/1.jpg" alt="메뉴 이미지" />
          <h2>휘낭시에</h2>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuImage src="../../../public/Main/2.jpg" alt="메뉴 이미지" />
          <h2>이병욱똥꼬</h2>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuImage src="../../../public/Main/3.jpg" alt="메뉴 이미지" />
          <h2>똥꼬털</h2>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuImage src="../../../public/Main/4.jpg" alt="메뉴 이미지" />
          <h2>초코똥꼬</h2>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuImage src="../../../public/Main/5.jpg" alt="메뉴 이미지" />
          <h2>휘낭시에</h2>
        </S.MenuItem>
      </div>
      <div>
        <S.MenuItem>
          <S.MenuImage src="../../../public/Main/1.jpg" alt="메뉴 이미지" />
          <h2>휘낭시에</h2>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuImage src="../../../public/Main/2.jpg" alt="메뉴 이미지" />
          <h2>휘낭시에</h2>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuImage src="../../../public/Main/3.jpg" alt="메뉴 이미지" />
          <h2>휘낭시에</h2>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuImage src="../../../public/Main/4.jpg" alt="메뉴 이미지" />
          <h2>휘낭시에</h2>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuImage src="../../../public/Main/5.jpg" alt="메뉴 이미지" />
          <h2>휘낭시에</h2>
        </S.MenuItem>
      </div> */
}
