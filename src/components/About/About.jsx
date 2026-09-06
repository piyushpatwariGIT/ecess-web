import { motion } from "framer-motion";
import Stat from "./Stat";

import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      

      <div className="about-heading">
        <div className="line-mask">
          <motion.h2
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            About <span className="highlight">Us</span>
          </motion.h2>
        </div>
      </div>

      <div className="about-content">
        <motion.div
          className="about-col"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3>
            Who are <span className="highlight">We?</span>
          </h3>
          <p>
            We are a non-profit society led by the students of the Department
            of Electronics &amp; Communication Engineering, NIT Durgapur. This
            Society is formed to make the students develop professional and
            technical skills to meet the growing industrial challenges. Our
            mission at ECESS is to foster a vibrant community of ECE students
            at NIT Durgapur, providing them with opportunities to enhance
            their professional and technical skills. We aim to bridge the gap
            between academia and industry, equipping students with the
            knowledge necessary to excel in this field.
          </p>
        </motion.div>

        <motion.div
          className="about-col"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3>
            What are <span className="highlight">Our Objectives?</span>
          </h3>
          <ul className="about-objectives">
            <li>
              Organize workshops, seminars, and technical talks to introduce
              students to cutting-edge technologies and industry best
              practices.
            </li>
            <li>
              Create platforms for students to connect with peers, alumni,
              and industry experts, expanding their professional network.
            </li>
            <li>
              Establish a robust alumni network to foster mentorship,
              networking, and lifelong connections for current students.
            </li>
            <li>
              Provide mentorship and support for students undertaking
              projects and research initiatives.
            </li>
          </ul>
        </motion.div>
      </div>

      <div className="stats-container">
        <Stat value={50} suffix="+" label="Members" />
        <Stat value={30} suffix="+" label="Events and Workshops" />
        <Stat value={500} suffix="+" label="Participants" />
      </div>
    </section>
  );
}