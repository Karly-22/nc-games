import { useContext } from "react";
import { useState } from "react-router-dom";
import { ThemeContext } from "../contexts/Theme";

function ToggleTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((currTheme) => {
      return currTheme === "light" ? "dark" : "light";
    });
  };

  return (
    <button onClick={toggleTheme} className={`button__${theme}`}>
      Change theme
    </button>
  );
}

export default ToggleTheme;
