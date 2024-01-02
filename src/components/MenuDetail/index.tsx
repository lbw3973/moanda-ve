import { useState } from "react";
import * as S from "./style";
import { menuFinancierItems, menuCookieItems } from "../../util/MenuData";
import MenuModal from "../MenuModal";

const MenuDetail = () => {
  //모바일 이미지 클릭다운시 이미지 어둡게 하고
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <h3>NO 계란 버터 우유 설탕 색소 밀가루</h3>
        <h3>YES 두유 식물성오일 두부 쌀가루 통밀가루 아몬드가루</h3>
        <h3>모앤더비는 식물성재료를 사용해 보다 더 건강하고 맛있는 비건디저트를 만드는 공간입니다.</h3>
        <h3>
          쿠키, 휘낭시에, 비스코티, 케이크 등 매일 다양한 종류의 디저트를 만들고 있습니다. 모든 디저트는 비건이며
          제로웨이스트를 지향합니다 :)
        </h3>
        <h3>//////요렇게 앞에 뭐 적어주면 좋긴할듯///////////////</h3>
      </div>
      <S.MenuItemTitle>비건 휘낭시에</S.MenuItemTitle>
      <S.StoreDetail>
        {menuFinancierItems.map((item, index) => (
          <div key={index}>
            <S.MenuItem>
              <S.MenuImage src={item.src} alt="메뉴 이미지" onClick={handleOpenModal} />
              <h2>{item.name}</h2>
            </S.MenuItem>
          </div>
        ))}
      </S.StoreDetail>
      <S.MenuItemTitle>비건 쿠키</S.MenuItemTitle>
      <S.StoreDetail>
        {menuCookieItems.map((item, index) => (
          <div key={index}>
            <S.MenuItem>
              <S.MenuImage src={item.src} alt="메뉴 이미지" />
              <h2>{item.name}</h2>
            </S.MenuItem>
          </div>
        ))}
      </S.StoreDetail>
      <MenuModal openState={isOpen} onClose={handleCloseModal} />
    </>
  );
};

export default MenuDetail;
