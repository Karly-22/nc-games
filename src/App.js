import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ReviewsList from "./components/ReviewsList";
import Categories from "./components/Categories";
import SingleReview from "./components/SingleReview";
import Home from "./components/Home";
import ToggleTheme from "./components/ToggleTheme";
import ErrorPath from "./components/ErrorPath";
import { ThemeContext } from "./contexts/Theme";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`App__${theme}`}>
        <ToggleTheme />
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<ReviewsList />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:category" element={<ReviewsList />} />
          <Route path="/reviews/:review_id" element={<SingleReview />} />
          <Route path="*" element={<ErrorPath />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
