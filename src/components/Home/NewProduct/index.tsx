import * as S from "./style";
import { useScreenSizeStore } from "@/stores/screenSizeStore";

const NewProduct = () => {
  const { isMobileView } = useScreenSizeStore();
  return (
    <S.Container className="fps_child">
      <img src={isMobileView ? "https://picsum.photos/400/300" : "https://picsum.photos/1600/700"} width="100%" />
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
    </S.Container>
  );
};

export default NewProduct;
