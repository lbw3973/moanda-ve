import * as S from "./style";
import GiftItemList from "../GiftItemList";
const GiftForm = () => {
  return (
    <S.GiftContainer>
      <img src="./gift/poster.png" alt="안내포스터" className="poster" />
      <GiftItemList />
    </S.GiftContainer>
  );
};

export default GiftForm;
