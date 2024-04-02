import { useScreenSizeStore } from "@/stores/screenSizeStore";

const PreviewInsta = () => {
  const { isMobileView } = useScreenSizeStore();
  return (
    <div className="fps_child">
      <img src={isMobileView ? "https://picsum.photos/400/300" : "https://picsum.photos/1600/700"} width="100%" />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          fontSize: "60px",
          color: "white",
          zIndex: "1000",
          transform: "translate(-50%, -50%)",
        }}
      >
        이미지 준비중...
      </div>
    </div>
  );
};

export default PreviewInsta;
