import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <motion.div
      className="portfolio tab"
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ width: 0, opacity: 0 }}
      transition={{ type: "tween" }}
    >
      <h1>this will be Portfolio</h1>
    </motion.div>
  );
};

export default Portfolio;
