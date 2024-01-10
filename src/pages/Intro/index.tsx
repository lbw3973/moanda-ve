import WayToCome from "@/components/WayToCome";
import * as S from "./style";
import LogoDescription from "@/components/LogoDescription";

const Intro = () => {
  return (
    <S.IntroSection>
      <LogoDescription />
      <WayToCome />
    </S.IntroSection>
  );
};

export default Intro;
