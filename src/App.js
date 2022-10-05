import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";

import { useState } from "react";

import sun from "./media/sun.png";
import moon from "./media/moon.png";

function App() {
  const changeColors = (one, two, three, four, five, six) => {
    let root = document.documentElement;
    root.style.setProperty("--one", one);
    root.style.setProperty("--two", two);
    root.style.setProperty("--three", three);
    root.style.setProperty("--four", four);
    root.style.setProperty("--five", five);
    root.style.setProperty("--six", six);
  };
  let [theme, setTheme] = useState("light");
  const switchTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
    if (theme === "dark") changeColors("#000000", "#30475e", "#f05454", "#f5f5f5", "#e5e5e5", "#d3d3d3");
    else changeColors("#ffffff", "#f5f5f5", "#03c04a", "#413f42", "#393939", "#2b2b2b");
    // let root = document.documentElement;
    // root.style.setProperty("--six", "#2b2b2b");
    console.log(theme);
  };
  return (
    <Router>
      <div className="app">
        <div className="toggle" onClick={switchTheme}>
          <img
            src={theme === "dark" ? sun : moon}
            alt={theme === "dark" ? "sun icon" : "moon icon"}
          />
        </div>
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <Header theme={theme} />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
