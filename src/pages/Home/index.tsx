import { FullPageScroll } from "@/components/Common/FullPageScroll";
import Footer from "@/components/Footer";
import Swiper from "@/components/Swiper";
import { useEffect, useState } from "react";

const Home = () => {
  const [useFPS, setUseFPS] = useState(false);

  useEffect(() => {
    const resizing = () => {
      setUseFPS(window.innerWidth > 768);
    };
    resizing();

    window.addEventListener("resize", resizing);

    return () => {
      window.removeEventListener("resize", resizing);
    };
  }, []);

  return (
    <section>
      {useFPS ? (
        <FullPageScroll>
          <div className="fps_child">
            <img src="/Mobile/Main/img_1.jpg" />
          </div>
          <div className="fps_child">
            <img src="/Mobile/Main/img_2.jpg" />
          </div>
          <div className="fps_child">
            <img src="/Mobile/Main/img_3.jpg" />
          </div>
          <Footer />
        </FullPageScroll>
      ) : (
        <Swiper />
      )}
    </section>
  );
};

export default Home;
