import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ReviewsList from "./components/ReviewsList";
import Categories from "./components/Categories";
import SingleReview from "./components/SingleReview";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<ReviewsList />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:category" element={<ReviewsList />} />
        <Route path="/reviews/:review_id" element={<SingleReview />} />
      </Routes>
    </div>
  );
}

export default App;
