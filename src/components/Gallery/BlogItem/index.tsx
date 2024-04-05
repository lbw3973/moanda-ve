import { IBlog } from "@/types/blog";
import * as S from "./style";

const BlogItem = ({ data }: { data: IBlog }) => {
  return (
    <S.Container onClick={() => window.open(data.link)}>
      <S.InfoWrapper>
        <h1>{data.title}</h1>
        <p className="content">{data.content}</p>
        <p className="date">{data.date}</p>
      </S.InfoWrapper>
      <S.ImageWrapper>
        <img src={data.thumbnail} />
      </S.ImageWrapper>
    </S.Container>
  );
};

export default BlogItem;
