import * as S from "./style";

const IntroHeader = ({ headerText }: { headerText: string }) => {
  return (
    <S.Header>
      <h2>{headerText}</h2>
    </S.Header>
  );
};

export default IntroHeader;
