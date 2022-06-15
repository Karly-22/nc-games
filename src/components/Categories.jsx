import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "../utils/api";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);

  return (
    <ul>
      {categories.map((category) => {
        return (
          <li key={category.slug} value={category.slug}>
            <Link to={`/reviews/${category.slug}`}>
              <h3>{category.slug}</h3>
            </Link>
            <p>{category.description}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default Categories;
