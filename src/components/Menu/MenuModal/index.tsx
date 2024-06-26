import React, { useEffect, useState } from "react";
import * as S from "./style";
import constant from "@/constants/base.json";
const AreaElements = [
  { rotate: -45, translateY: 2 },
  { rotate: 45, translateY: -2 },
];

type ItemType = {
  src: string;
  name?: string;
  price: string;
  ingredient: string;
  how: string;
  warning: string;
};

interface IMenuModalProps {
  openState: boolean; // 'isOpen'을 'openState'로 수정
  onClose: () => void;
  item: ItemType | undefined;
}

const MenuModal: React.FC<IMenuModalProps> = ({ openState, onClose, item }) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setOpen(openState);
  }, [openState]);

  useEffect(() => {
    return () => {
      onClose();
    };
  }, []);

  const isWholeCake = () => {
    return item?.src.includes("/wholeCake/");
  };

  const handleClickButton = () => {
    const url = isWholeCake() ? constant.KakaoChannel : constant.NaverStoreProduct;
    window.open(url);
  };

  return (
    <S.MenuModalSection $isOpen={isOpen}>
      <S.MenuModalContainer $isOpen={isOpen}>
        <S.MenuModalHeader>
          <S.MenuModalTitle>
            <S.MenuModalTitleDesign></S.MenuModalTitleDesign>
            <S.MenuModalTitleName>{item?.name}</S.MenuModalTitleName>
          </S.MenuModalTitle>

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
        <S.MenuModalImageDiv>
          <S.MenuModalImage src={item?.src} alt={item?.name} />
        </S.MenuModalImageDiv>
        <S.MenuModalDesTitle>
          <div>
            <h1>주성분</h1>
            <div>
              {item?.ingredient.includes("\n")
                ? item?.ingredient.split("\n").map((data, index) => (
                    <span key={index}>
                      {data}
                      <br />
                    </span>
                  ))
                : item?.ingredient}
            </div>
          </div>
        </S.MenuModalDesTitle>
        <span className="how">{item?.how}</span>
        <S.MenuModalWarning>*{item?.warning}</S.MenuModalWarning>
        <S.MenuModalButton onClick={handleClickButton}>
          <img src={`${isWholeCake() ? "/Logo/kakao.png" : "/Logo/naver.jpg"}`} alt="" />
          <div>
            <h1>모앤더비</h1>
            <h1>{isWholeCake() ? "카카오톡 채널로 문의해주세요." : "스마트 스토어에서 구매가능합니다."}</h1>
          </div>
        </S.MenuModalButton>
      </S.MenuModalContainer>
    </S.MenuModalSection>
  );
};

export default MenuModal;
