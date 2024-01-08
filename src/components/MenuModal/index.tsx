import React, { useEffect, useState } from "react";
import * as S from "./style";

const AreaElements = [
  { rotate: -45, translateY: 2 },
  { rotate: 45, translateY: -2 },
];

type ItemType = {
  src: string;
  name: string;
  title: string;
  des: string;
};

interface IMenuModalProps {
  openState: boolean; // 'isOpen'을 'openState'로 수정
  onClose: () => void;
  item: ItemType | null;
}

const MenuModal: React.FC<IMenuModalProps> = ({ openState, onClose, item }) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setOpen(openState);
  }, [openState]);

  return (
    <S.MenuModalSection $isOpen={isOpen}>
      <S.MenuModalContainer $isOpen={isOpen}>
        <S.MenuModalHeader>
          <S.MenuModalTitle>{item?.name}</S.MenuModalTitle>
          {/* <S.MenuModalExit onClick={onClose}>X</S.MenuModalExit> */}
          <S.MenuModalExit onClick={onClose}>
            {AreaElements.map((style, index) => (
              <S.AreaElement
                key={index}
                rotate={style.rotate as number}
                translate={style.translateY as number}
              ></S.AreaElement>
            ))}
          </S.MenuModalExit>
        </S.MenuModalHeader>
        <S.MenuModalImage src={item?.src} alt={item?.name} />
        <h3>{item?.title}</h3>
        <h3>{item?.des}</h3>
      </S.MenuModalContainer>
    </S.MenuModalSection>
  );
};

export default MenuModal;
