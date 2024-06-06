import { useQuery } from "@tanstack/react-query";
import * as S from "./style";
import { IResInstagram, IResInstagramList } from "@/types/insta";
import { getInstagramNextPost, getInstagramPost } from "@/apis/instagram";
import InstaItem from "../InstaItem";
import IntroHeader from "@/components/Intro/IntroHeader";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import LoadingUI from "@/components/Common/LoadingUI";

const InstaList = () => {
  const [instaPosts, setInstaPosts] = useState<IResInstagram[]>([]);
  const [nextURL, setNextURL] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const { data: instagram_List, isFetched, isError } = useQuery<IResInstagramList>({
    queryKey: ["Instagram_list"],
    queryFn: () => getInstagramPost(12),
  });

  useEffect(() => {
    if (isFetched && instagram_List) {
      setInstaPosts(instagram_List.data);
      setNextURL(instagram_List.paging.next);
      setIsLoading(false);
    }else if(isError){
      setIsLoading(false)
    }
  }, [isFetched, isError]);

  const handleClickSeeMore = async () => {
    setIsLoading(true);
    const nextPosts = await getInstagramNextPost(nextURL);
    setInstaPosts(prevPosts => [...prevPosts, ...nextPosts.data]);
    setNextURL(nextPosts.paging.next);
    setIsLoading(false);
  };

  return (
    <S.Container>
      <IntroHeader headerText="모앤더비 인스타그램" />
      {isError ? 
        <S.ErrorNotice>점검중입니다.</S.ErrorNotice> 
        : 
        <S.ListWrapper>
          {instaPosts && instaPosts.map(item => <InstaItem key={item.id} data={item} />)}
        </S.ListWrapper>
      }
      <S.SeeMoreContainer onClick={handleClickSeeMore}>
        더보기
        <IoIosArrowDown />
      </S.SeeMoreContainer>
      {isLoading && <LoadingUI />}
    </S.Container>
  );
};

export default InstaList;
