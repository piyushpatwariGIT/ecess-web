import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initLenis } from "./lib/lenis";
import Home from "./pages/Home/Home";
import { useEffect } from "react";
import Collaborators from "./components/Collaborators/Collaborators";
import Footer from "./components/Footer/Footer";
import Bounce from "./components/BounceCards/Bounce";

function Landing() {
  return (
    <>
      <Home />
      
      <Collaborators />
      <Bounce />
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