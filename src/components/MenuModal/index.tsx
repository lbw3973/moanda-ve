import React, { useEffect, useState } from "react";
import * as S from "./style";

interface IMenuModalProps {
  openState: boolean; // 'isOpen'을 'openState'로 수정
  onClose: () => void;
}

const MenuModal: React.FC<IMenuModalProps> = ({ openState, onClose }) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setOpen(openState);
  }, [openState]); // 의존성 배열에 'openState' 추가

  return (
    <S.MenuModalSection $isOpen={isOpen}>
      <S.MenuModalContainer>
        <S.MenuModalHeader>
          <h1>오리지널 쿠키</h1>
          <S.MenuModalExit onClick={onClose}>X</S.MenuModalExit>
        </S.MenuModalHeader>
        <S.MenuModalImage src="../../public/menu/cookie_1.jfif" alt="" />

        <h3>쌀가루 + 아몬드가루 + 수제캐러멜 + 소금 </h3>
        <h3>NO 계란 버터 우유 설탕 색소 밀가루</h3>
        <h3> YES 두유 식물성오일 두부 쌀가루 </h3>
      </S.MenuModalContainer>
    </S.MenuModalSection>
  );
};

export default MenuModal;
