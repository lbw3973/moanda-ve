import IntroHeader from "../IntroHeader";
import Logo from "/Logo/Logo.jpg";
import * as S from "./style";

const LogoDescription = () => {
  return (
    <>
      <S.Container>
        <S.DescriptionContaier>
          <IntroHeader headerText="모앤더비" />
          <S.LogoImage src={Logo} alt="로고" />
          <S.InformWrapper>
            <p className="solving">
              <span>Mo</span>ther <span>an</span>d <span>da</span>ughter' <span>ve</span>gan
            </p>
            <p className="first_des">모녀가 함께 맛있고 건강한 디저트를 만듭니다.</p>
            <p className="since">(since. 2021)</p>
          </S.InformWrapper>
        </S.DescriptionContaier>
        <S.ImageContainer>
          <img src="/Outside/outside_7_1.jpg" />
        </S.ImageContainer>
      </S.Container>
    </>
  );
};

export default LogoDescription;
