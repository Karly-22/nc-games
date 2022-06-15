import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ReviewsList from "./components/ReviewsList";
import Categories from "./components/Categories";
import FilteredReviews from "./components/FilteredReviews"
import SingleReview from "./components/SingleReview";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/reviews" element={<ReviewsList />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:category" element={<FilteredReviews />} />
        <Route path="/reviews/:review_id" element={<SingleReview />} />
      </Routes>
    </div>
  );
}

export default App;
