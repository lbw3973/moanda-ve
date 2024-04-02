import { IResInstagram } from "@/types/insta";
import * as S from "./style";
import { getUploadDate } from "@/utils/parseData";

const InstaModal = ({ data, closeModal }: { data: IResInstagram; closeModal: () => void }) => {
  const handleClickContainer = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    target.classList.contains("container") && closeModal();
  };

  return (
    <S.Container onClick={handleClickContainer} className="container">
      <S.Wrapper>
        <div className="media">{data.media_type === "IMAGE" && <img src={data.media_url} />}</div>
        <div className="content">
          <div className="title">
            <span>{getUploadDate(new Date(data.timestamp))}</span>
            <button id="close" onClick={closeModal}>
              X
            </button>
          </div>
          <div className="caption">{data.caption}</div>
        </div>
      </S.Wrapper>
    </S.Container>
  );
};

export default InstaModal;
