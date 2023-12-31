import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import Intro from "../pages/Intro";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<Intro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
