import WayToCome from "@/components/WayToCome";
import * as S from "./style";
import LogoDescription from "@/components/LogoDescription";
import VeganDescription from "@/components/VeganDescription";

const Intro = () => {
  return (
    <S.IntroSection>
      <LogoDescription />
      <VeganDescription />
      <WayToCome />
    </S.IntroSection>
  );
};

export default Intro;
