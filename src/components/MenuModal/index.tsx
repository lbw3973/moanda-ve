import React, { useEffect, useState } from "react";
import * as S from "./style";

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
      <S.MenuModalContainer>
        <S.MenuModalHeader>
          <h1>{item?.name}</h1>
          <S.MenuModalExit onClick={onClose}>X</S.MenuModalExit>
        </S.MenuModalHeader>
        <S.MenuModalImage src={item?.src} alt={item?.name} />
        <h3>{item?.title}</h3>
        <h3>{item?.des}</h3>
      </S.MenuModalContainer>
    </S.MenuModalSection>
  );
};

export default MenuModal;
