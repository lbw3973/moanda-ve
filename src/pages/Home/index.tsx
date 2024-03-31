import Intro from "@/components/Main/DeskTop/Intro";
import NewProduct from "@/components/Main/DeskTop/NewProduct";
import PreviewGift from "@/components/Main/DeskTop/PreviewGift";
import PreviewInsta from "@/components/Main/DeskTop/PreviewInsta";

const Home = () => {
  return (
    <section style={{ position: "relative" }}>
      <Intro />
      <NewProduct />
      <PreviewGift />
      <PreviewInsta />
    </section>
  );
};

export default Home;
