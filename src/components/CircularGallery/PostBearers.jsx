
import { motion } from "framer-motion";
import CircularGallery from "./CircularGallery";
import "./PostBearers.css";

export default function PostBearers() {
  return (
    <section className="PostBearers" id="PostBearers">
      <div className="PostBearers-heading">
        <div className="line-mask">
          <motion.h2
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Post <span className="highlight">Bearers</span>
          </motion.h2>
        </div>
      </div>

      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery
          bend={0}
          textColor="#ffffff"
          borderRadius={0.11}
          scrollEase={0.05}
          fontUrl=""
          font="bold 30px Orbitron"
          scrollSpeed={1}
        />
      </div>
    </section>
  );
}
