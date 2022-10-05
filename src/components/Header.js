import "./component_style/header.css";
import homeBlue from "../media/home-blue.png";
import homeWhite from "../media/home-white.png";
import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";

const Header = (props) => {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/">
            <motion.img whileHover={{width: "40px"}} src={props.theme === "light" ? homeBlue : homeWhite} alt="home-icon" />
          </NavLink>
        </li>
        <motion.li whileHover={{fontSize: "35px"}}>
          <NavLink to="/about">About</NavLink>
        </motion.li>
        <motion.li whileHover={{fontSize: "35px"}}>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </motion.li>
        <motion.li whileHover={{fontSize: "35px"}}>
          <NavLink to="/connect">Connect</NavLink>
        </motion.li>
      </ul>
    </header>
  );
};

export default Header;
