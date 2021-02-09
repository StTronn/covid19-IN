import React, { useState } from "react";
import { Link } from "react-router-dom";

import Moon from "./images/moon.svg";
import Sun from "./images/sun.svg";
import Search from "./Search";

import routes from "../../router/webRoutes";

import "./nav.css";

const Nav = () => {
  const [theme, setTheme] = useState(findIntialTheme());

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("mode", JSON.stringify(newTheme));
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <div className="navWrapper">
      <div className="nav">
        <div className="navCointainer ">
          <div className="logoNav">
            <Link to={routes.HOME}>
              <div className="logoNavTitle">Covid-In</div>
            </Link>
          </div>
          <Search />
          <div className="icons">
            <img
              className="themeToggle"
              alt="dark mode"
              onClick={toggleTheme}
              src={theme === "light" ? Moon : Sun}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const findIntialTheme = () => {
  const cache = JSON.parse(localStorage.getItem("mode")) || false;

  if (cache) {
    document.documentElement.setAttribute("data-theme", cache);
    return cache;
  }

  let theme = "light";
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    theme = "dark";
  }
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

export default Nav;
