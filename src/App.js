import "./App.css";
import { Routes, ROute } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/reviews" element={<ReviewsList />} />
      </Routes>
    </div>
  );
}

export default App;
