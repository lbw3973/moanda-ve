import { FullPageScroll } from "@/components/Common/FullPageScroll";
import Footer from "@/components/Footer";
import Swiper from "@/components/Swiper";
import { useScreenSizeStore } from "@/stores/screenSizeStore";
import { mainImageList_DeskTop, mainImageList_Mobile } from "../../constants/importImage";

const Home = () => {
  const { isMobileView } = useScreenSizeStore();

  return (
    <section>
      {isMobileView ? (
        <Swiper imageList={mainImageList_Mobile} />
      ) : (
        <FullPageScroll>
          <Swiper imageList={mainImageList_DeskTop} />
          <div className="fps_child">
            <img src="/test2.jpg" />
          </div>
          <div className="fps_child">
            <img src="/Mobile/Main/img_3.jpg" />
          </div>
          <Footer />
        </FullPageScroll>
      )}
    </section>
  );
};

export default Home;
