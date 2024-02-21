import { useState } from "react";
import * as S from "./style";
import MenuModal from "../MenuModal";

import MenuItems from "@/constants/MenuData.json";

type ItemType = {
  src: string;
  name: string;
  price: string;
  ingredient: string;
  how: string;
  warning: string;
};

const MenuDetail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ItemType | undefined>();

  const handleOpenModal = (item: ItemType) => {
    setSelectedItem(item);
    setIsOpen(!isOpen);
    document.body.style.overflow = "hidden";
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

      <MenuModal
        openState={isOpen}
        onClose={() => {
          setIsOpen(false);
          document.body.style.overflow = "auto";
        }}
        item={selectedItem}
      />
    </>
  );
};

export default MenuDetail;
