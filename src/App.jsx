import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initLenis } from "./lib/lenis";
import Home from "./pages/Home/Home";
import { useEffect } from "react";
import Collaborators from "./components/Collaborators/Collaborators";
import Footer from "./components/Footer/Footer";
import AccordianGallery from "./components/AccordianGallery/AccordianGallery";

const items = [
  { image: 'https://picsum.photos/id/1015/900/1200', label: 'Canyon', link: '#' },
  { image: 'https://picsum.photos/id/1018/900/1200', label: 'Ridgeline', link: '#' },
  { image: 'https://picsum.photos/id/1039/900/1200', label: 'Falls', link: '#' },
  { image: 'https://picsum.photos/id/1043/900/1200', label: 'Harbour', link: '#' },
  { image: 'https://picsum.photos/id/1044/900/1200', label: 'Skyline', link: '#' }
];

function Landing() {
  return (
    <>
      <Home />
     
    <AccordianGallery
  items={items}
  defaultIndex={2}
  expandRatio={0.52}
  trigger="hover"
  accentColor="#ffffff"
  overlayColor="#060010"
  textColor="#ffffff"
  grayscale
  showLabels
  duration={0.6}
  ease="power3.out"
  parallax={0.5}
  tilt={8}
  stagger={0.06}
  height={460}
  gap={10}
  radius={16}
  orientation="horizontal"
/>
 <Collaborators />
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