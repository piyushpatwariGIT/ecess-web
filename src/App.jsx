
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import { initLenis } from "./lib/lenis";

import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import PostBearers from "./components/CircularGallery/PostBearers.jsx";
import FeaturedEvents from "./components/AccordianGallery/FeaturedEvents.jsx";

function Landing() {
  return (
    <>
      <Home />
      <FeaturedEvents />
      <PostBearers />
      <Footer />
    </>
  );
}

function App() {
  useEffect(() => {
    initLenis();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;