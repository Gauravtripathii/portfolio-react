import "./component_style/header.css";
import home from "../media/home.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/"><img src={home} alt="home-icon" /></NavLink>
        </li>
        <li>
          <NavLink to="/">About</NavLink>
        </li>
        <li>
          <NavLink to="/">Porfolio</NavLink>
        </li>
        <li>
          <NavLink to="/">Contact Me</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
