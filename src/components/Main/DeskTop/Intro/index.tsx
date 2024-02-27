import Swiper from "@/components/Swiper";
import { mainImageList_DeskTop } from "@/constants/importImage";

const Intro = () => {
  return (
    <div style={{ position: "relative" }}>
      <Swiper imageList={mainImageList_DeskTop} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          fontSize: "60px",
          zIndex: "1000",
          transform: "translate(-50%, -50%)",
        }}
      >
        이미지 준비중...
      </div>
    </div>
  );
};

export default Intro;
