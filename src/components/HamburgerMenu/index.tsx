import { Dispatch, SetStateAction } from "react";
import * as S from "./style";

const AreaElements = [{ rotate: -45, translateY: 11 }, { opacity: 0 }, { rotate: 45, translateY: -11 }];
const HamburgerMenu = ({
  isClicked,
  setIsClicked,
}: {
  isClicked: boolean;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <S.Container>
      <S.ClickArea onClick={() => setIsClicked(!isClicked)}>
        {AreaElements.map((style, index) => (
          <S.AreaElement
            key={index}
            $isClicked={isClicked}
            rotate={style.rotate as number}
            opacity={style.opacity as number}
            translate={style.translateY as number}
          ></S.AreaElement>
        ))}
      </S.ClickArea>
    </S.Container>
  );
};

export default HamburgerMenu;
