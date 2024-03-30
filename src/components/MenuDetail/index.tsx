import { useEffect, useRef, useState } from "react";
import * as S from "./style";
import MenuModal from "../MenuModal";
import MenuItems from "@/constants/MenuData.json";

type ItemType = {
  src: string;
  name?: string;
  price: string;
  ingredient: string;
  how: string;
  warning: string;
};

const MenuDetail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ItemType | undefined>();

  const containerRef = useRef<HTMLInputElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);

  const handleOpenModal = (name: string, item: ItemType) => {
    item.name = name;
    setSelectedItem(item);
    setIsOpen(!isOpen);
    document.body.style.overflow = "hidden";
  };

  const addItemRef = (el: HTMLDivElement) => {
    if (el && !itemRefs.current.includes(el)) {
      itemRefs.current.push(el);
    }
  };

  const clickClose = () => {
    if (isOpen) {
      setIsOpen(false);
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    if (itemRefs.current.length === 0) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px", threshold: 0.2 },
    );

    itemRefs.current.forEach(el => {
      observer.observe(el);
    });

    return () => {
      itemRefs.current.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, [itemRefs.current.length]);

  return (
    <div onClick={clickClose} ref={containerRef}>
      {Object.entries(MenuItems).map(([title, items], index) => (
        <S.MenuDetailContainer key={index}>
          <S.MenuDetailDiv ref={addItemRef}>
            <S.MenuItemTitle key={index}>{title}</S.MenuItemTitle>
            <S.StoreDetail>
              {Object.entries(items).map(([name, item], idx) => (
                <div key={idx}>
                  <S.MenuItem onClick={() => handleOpenModal(name, item)}>
                    <S.MenuImage src={item.src} alt="메뉴 이미지" />
                    <h2>{name}</h2>
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
