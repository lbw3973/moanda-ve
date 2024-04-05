import Intro from "@/components/Home/Intro";
import NewProduct from "@/components/Home/NewProduct";
import PreviewGift from "@/components/Home/PreviewGift";
import PreviewInsta from "@/components/Home/PreviewInsta";

const Home = () => {
  return (
    <section style={{ position: "relative" }}>
      <Intro />
      {/* <NewProduct /> */}
      <PreviewGift />
      <PreviewInsta />
    </section>
  );
};

export default Home;
