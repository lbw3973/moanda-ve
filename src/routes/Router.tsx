import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import Menu from "../pages/Menu/index";
import Notice from "../pages/Notice";
import Gallery from "../pages/Gallery";
import Intro from "../pages/Intro";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/notice" element={<Notice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
