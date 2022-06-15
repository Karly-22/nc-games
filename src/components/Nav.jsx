import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/reviews">Reviews</Link>
      <Link to="/categories">Categories</Link>
    </nav>
  );
}

export default Nav;
