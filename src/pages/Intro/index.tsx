import * as S from "./style";
import WayToCome from "@/components/Main/Common/WayToCome";
import LogoDescription from "@/components/Main/Common/LogoDescription";
import VeganDescription from "@/components/Main/Common/VeganDescription";
import { useEffect, useRef } from "react";

const sections = [<LogoDescription />, <VeganDescription />, <WayToCome />];

const Intro = () => {
  const LogoDesRef = useRef<HTMLDivElement>(null);
  const VeganDesRef = useRef<HTMLDivElement>(null);
  const WayToComeRef = useRef<HTMLDivElement>(null);
  const refs = [LogoDesRef, VeganDesRef, WayToComeRef];

  useEffect(() => {
    const handleScroll = () => {
      refs.forEach(ref => {
        const offset = ref.current?.getBoundingClientRect().y as number;
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

  return (
    <S.IntroSection>
      {sections.map((section, index) => (
        <div key={index} ref={refs[index]}>
          {section}
        </div>
      ))}
      {/* <LogoDescription />
      <VeganDescription />
      <WayToCome /> */}
    </S.IntroSection>
  );
};

export default Intro;
