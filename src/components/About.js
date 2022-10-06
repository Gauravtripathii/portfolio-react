import { motion } from "framer-motion";
import "./component_style/about.css";

const About = () => {
  return (
    <motion.div
      className="about tab"
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ width: 0, opacity: 0 }}
      transition={{ type: "tween" }}
    >
      <div className="card">
        A web developer who is proficient in both <span>frontend</span> and <span>backend</span>. My passion lies in learning new technologies.
      </div>
      <div className="card">
        An undergraduate engineering student in Electronics and Computer Science from KIIT University, Bhubaneshwar.
      </div>
      <div className="buttons">
        <span className="btn-1">Internships</span>
        <span className="btn-2">Hackathons</span>
      </div>
    </motion.div>
  );
};

export default About;
