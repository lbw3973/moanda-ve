import IntroHeader from "@/components/Intro/IntroHeader";
import BlogItem from "../BlogItem";
import * as S from "./style";
import BlogData from "@/constants/Blogs.json";

const BlogList = () => {
  return (
    <S.Container>
      <IntroHeader headerText="모앤더비 후기" />
      <S.Wrapper>
        {Object.entries(BlogData).map(([key, value]) => (
          <BlogItem key={key} data={value} />
        ))}
      </S.Wrapper>
    </S.Container>
  );
};

export default BlogList;
