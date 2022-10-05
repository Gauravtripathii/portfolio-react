import "./component_style/header.css";
import home from "../media/home.png";
import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/">
            <motion.img whileHover={{width: "40px"}} src={home} alt="home-icon" />
          </NavLink>
        </li>
        <motion.li whileHover={{fontSize: "35px"}}>
          <NavLink to="/">About</NavLink>
        </motion.li>
        <motion.li whileHover={{fontSize: "35px"}}>
          <NavLink to="/">Portfolio</NavLink>
        </motion.li>
        <motion.li whileHover={{fontSize: "35px"}}>
          <NavLink to="/">Contact Me</NavLink>
        </motion.li>
      </ul>
    </header>
  );
};

export default Header;
