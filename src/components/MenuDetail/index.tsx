import { useEffect, useRef, useState } from "react";
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

  const finanRef = useRef<HTMLDivElement>(null);
  const cookieRef = useRef<HTMLDivElement>(null);
  const biscotiRef = useRef<HTMLDivElement>(null);
  const poundRef = useRef<HTMLDivElement>(null);
  const bottleCakeRef = useRef<HTMLDivElement>(null);
  const wholeCakeRef = useRef<HTMLDivElement>(null);
  const refs = [finanRef, cookieRef, biscotiRef, poundRef, bottleCakeRef, wholeCakeRef];

  const handleOpenModal = (item: ItemType) => {
    setSelectedItem(item);
    setIsOpen(!isOpen);
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    const handleScroll = () => {
      refs.forEach(ref => {
        const offset = ref.current?.offsetTop as number;
        if (window.scrollY + window.innerHeight >= offset) {
          ref.current?.classList.add("visible");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const clickClose = () => {
    if (isOpen) {
      setIsOpen(false);
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div onClick={clickClose}>
      {Object.entries(MenuItems).map(([title, items], index) => (
        <S.MenuDetailContainer key={index}>
          <S.MenuDetailDiv ref={refs[index]}>
            <S.MenuItemTitle key={index}>{title}</S.MenuItemTitle>
            <S.StoreDetail>
              {items.map((item, idx) => (
                <div key={idx}>
                  <S.MenuItem onClick={() => handleOpenModal(item)}>
                    <S.MenuImage src={item.src} alt="메뉴 이미지" />
                    <h2>{item.name}</h2>
                  </S.MenuItem>
                </div>
              ))}
            </S.StoreDetail>
          </S.MenuDetailDiv>
        </S.MenuDetailContainer>
      ))}

      <MenuModal
        openState={isOpen}
        onClose={() => {
          setIsOpen(false);
          document.body.style.overflow = "auto";
        }}
        item={selectedItem}
      />
    </div>
  );
};

export default MenuDetail;
