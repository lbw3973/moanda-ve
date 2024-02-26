import { FullPageScroll } from "@/components/Common/FullPageScroll";
import Footer from "@/components/Footer";
import Swiper from "@/components/Swiper";
import { useScreenSizeStore } from "@/stores/screenSizeStore";
import { mainImageList_Mobile } from "../../constants/importImage";
import Intro from "@/components/Main/DeskTop/Intro";
import NewProduct from "@/components/Main/DeskTop/NewProduct";
import PreviewGift from "@/components/Main/DeskTop/PreviewGift";
import PreviewInsta from "@/components/Main/DeskTop/PreviewInsta";

const Home = () => {
  const { isMobileView } = useScreenSizeStore();

  return (
    <section style={{ position: "relative" }}>
      {isMobileView ? (
        <Swiper imageList={mainImageList_Mobile} />
      ) : (
        <FullPageScroll>
          <Intro />
          <NewProduct />
          <PreviewGift />
          <PreviewInsta />
          <Footer />
        </FullPageScroll>
      )}
    </section>
  );
};

export default Home;
