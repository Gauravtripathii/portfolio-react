import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Connect from "./Connect";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
