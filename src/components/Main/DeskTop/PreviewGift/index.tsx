const PreviewGift = () => {
  return (
    <div className="fps_child">
      <img src="/Mobile/Main/img_3.jpg" />
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

export default PreviewGift;
