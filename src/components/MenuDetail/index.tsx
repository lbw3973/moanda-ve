import { useState } from "react";
import * as S from "./style";
import MenuModal from "../MenuModal";

import MenuItems from "../../util/MenuData.json";

type ItemType = {
  src: string;
  name: string;
  sugar: string;
  title: string;
  des: string[];
  warning: string;
  ingredient: string;
};

const MenuDetail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ItemType | undefined>();

  const handleOpenModal = (item: ItemType) => {
    setSelectedItem(item);
    setIsOpen(!isOpen);
  };

  return (
    <>
      {Object.entries(MenuItems).map(([title, items], index) => (
        <div key={index}>
          <S.MenuItemTitle key={index}>{title}</S.MenuItemTitle>
          <S.StoreDetail>
            {items.map((item, idx) => (
              <div key={idx}>
                <S.MenuItem>
                  <S.MenuImage src={item.src} alt="메뉴 이미지" onClick={() => handleOpenModal(item)} />
                  <h2>{item.name}</h2>
                </S.MenuItem>
              </div>
            ))}
          </S.StoreDetail>
        </div>
      ))}

      <MenuModal openState={isOpen} onClose={() => setIsOpen(false)} item={selectedItem} />
    </>
  );
};

export default MenuDetail;
