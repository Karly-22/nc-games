import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h2>
        <Link to="/reviews">Reviews</Link>
        <Link to="/categories">Categories</Link>
      </h2>
    </nav>
  );
}

export default Nav;
