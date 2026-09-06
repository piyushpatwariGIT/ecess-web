import "./Footer.css";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="footer-top">
        {/* LEFT */}

        <div className="footer-brand">
          <h2>ECESS SS</h2>

          <p>
            The Electronics & Communication Engineering Student's Society (ECESS), NIT Durgapur is a student-led society dedicated to fostering technical excellence, innovation, and professional growth among ECE students.

Bringing together passionate developers, electronics enthusiasts, innovators, and aspiring engineers, ECESS provides a platform to explore emerging technologies, build practical skills, and connect with industry professionals, faculty, seniors, and alumni.

Through technical workshops, industrial talks, projects, and collaborative initiatives, ECESS strives to bridge the gap between academic learning and real-world engineering, preparing students to take on the challenges of a rapidly evolving technological landscape.

          </p>
        </div>

        {/* CENTER */}

        <div className="footer-links">
          <h4>Quick Links</h4>

          <a href="#">Home</a>
          <a href="#about">About Us</a>
          <a href="#membership">About ECESS</a>
          <a href="#collaborators">Collaborators</a>
        </div>

        {/* RIGHT */}

        <div className="footer-contact">
          <h4>Follow Us</h4>

          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">LinkedIn</a>
          <a href="#">Email</a>
        </div>
      </div>
    </motion.footer>
   
  );
  
}
