import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ReviewsList from "./components/ReviewsList";
import Categories from "./components/Categories";
import FilteredReviews from "./components/FilteredReviews"

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/reviews" element={<ReviewsList />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/reviews/:category" element={<FilteredReviews />} />
      </Routes>
    </div>
  );
}

export default App;
