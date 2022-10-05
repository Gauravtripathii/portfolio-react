import "./component_style/home.css";
import { motion } from "framer-motion"

const Home = () => {
  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1Gs2Byoq-DSccmuyTK5Pb-f6qlCI112hM/view",
      "_blank"
    );
  };
  return (
    <motion.div
      className="home tab"
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ width: 0, opacity: 0 }}
      transition={{ type: "tween" }}
    >
      <div className="intro">
        <h3>Hello, I am</h3>
        <h1>
          <span>gaurav kumar</span>tripathi
        </h1>
        <h3 style={{ "textAlign": "center" }}>And I love building things!</h3>
      </div>
      <div className="button" onClick={openResume}>
        View Resume &rarr;
      </div>
    </motion.div>
  );
};

export default Home;
