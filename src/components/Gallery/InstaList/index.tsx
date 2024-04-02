import { useQuery } from "@tanstack/react-query";
import * as S from "./style";
import { IResInstagram, IResInstagramList } from "@/types/insta";
import { getInstagramNextPost, getInstagramPost } from "@/apis/instagram";
import InstaItem from "../InstaItem";
import IntroHeader from "@/components/Intro/IntroHeader";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";

const InstaList = () => {
  const [instaPosts, setInstaPosts] = useState<IResInstagram[]>([]);
  const [nextURL, setNextURL] = useState("");

  const { data: instagram_List, isFetched } = useQuery<IResInstagramList>({
    queryKey: ["Instagram_list"],
    queryFn: getInstagramPost,
  });
  console.log(instaPosts);

  useEffect(() => {
    if (isFetched && instagram_List) {
      setInstaPosts(instagram_List.data);
      setNextURL(instagram_List.paging.next);
    }
  }, [isFetched]);

  const handleClickSeeMore = async () => {
    const nextPosts = await getInstagramNextPost(nextURL);
    setInstaPosts(prevPosts => [...prevPosts, ...nextPosts.data]);
    setNextURL(nextPosts.paging.next);
  };
  return (
    <S.Container>
      <IntroHeader headerText="모앤더비 인스타그램" />
      <S.ListWrapper>{instaPosts && instaPosts.map(item => <InstaItem key={item.id} data={item} />)}</S.ListWrapper>
      <S.SeeMoreContainer onClick={handleClickSeeMore}>
        더보기
        <IoIosArrowDown />
      </S.SeeMoreContainer>
    </S.Container>
  );
};

export default InstaList;
