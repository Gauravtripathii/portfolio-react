import { motion } from "framer-motion";
import "./component_style/portfolio.css";

const Portfolio = () => {

  const show = (event) => {
    const projects = event.target.childNodes[0];
    projects.className = "projects-visible";
  };
  const hide = (event) => {
    const projects = event.target.childNodes[0];
    projects.className = "projects-none";
  };
  return (
    <motion.div
      className="portfolio tab"
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ width: 0, opacity: 0 }}
      transition={{ type: "tween" }}
    >
      <div className="card" onMouseEnter={show} onMouseLeave={hide}>
        <div className="projects-none">something something</div>
        <h1>Frontend→</h1>
      </div>

      <div className="card" onMouseEnter={show} onMouseLeave={hide}>
        <div className="projects-none">something something</div>
        <h1>Fullstack→</h1>
      </div>
    </motion.div>
  );
};

export default Portfolio;
