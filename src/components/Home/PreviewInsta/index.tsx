import InstaItem from "@/components/Gallery/InstaItem";
import * as S from "./style";
import { useQuery } from "@tanstack/react-query";
import { getInstagramPost } from "@/apis/instagram";
import { IResInstagramList } from "@/types/insta";
import { IoArrowForward } from "react-icons/io5";

const PreviewInsta = () => {
  const { data: instaItems } = useQuery<IResInstagramList>({
    queryKey: ["previewInsta"],
    queryFn: () => getInstagramPost(3),
  });

  return (
    <S.Container>
      <S.Header>인스타그램</S.Header>
      <S.InstaWrapper>
        {instaItems && instaItems.data.map((data, index) => <InstaItem data={data} key={index} />)}
      </S.InstaWrapper>
      <S.MoreButton to={"/gallery"}>
        더보기
        <IoArrowForward />
      </S.MoreButton>
    </S.Container>
  );
};

export default PreviewInsta;
