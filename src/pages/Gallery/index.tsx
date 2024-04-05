import InstaList from "@/components/Gallery/InstaList";
import * as S from "./style";
import BlogList from "@/components/Gallery/BlogList";

const Gallery = () => {
  return (
    <S.GallerySection>
      <BlogList />
      <InstaList />
    </S.GallerySection>
  );
};

export default Gallery;
