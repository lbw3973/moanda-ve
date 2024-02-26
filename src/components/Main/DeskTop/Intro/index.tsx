import Swiper from "@/components/Swiper";
import { mainImageList_DeskTop } from "@/constants/importImage";

const Intro = () => {
  return (
    <>
      <Swiper imageList={mainImageList_DeskTop} />
    </>
  );
};

export default Intro;
