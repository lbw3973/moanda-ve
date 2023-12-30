import { useState } from "react";
import * as S from "./style";

const activeStyle = [
  { condition: "transform translate-x-1 -rotate-45 w-[75%]" },
  { condition: "opacity-0 -translate-x-20" },
  { condition: "transform translate-x-1 rotate-45 w-[75%]" },
];
const HamburgerMenu = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <S.Container>
      <S.ClickArea isClicked={isClicked} onClick={() => setIsClicked(!isClicked)}>
        {activeStyle.map((style, index) => (
          <S.AreaElement key={index} index={index}></S.AreaElement>
        ))}
      </S.ClickArea>
    </S.Container>
  );
};

export default HamburgerMenu;
