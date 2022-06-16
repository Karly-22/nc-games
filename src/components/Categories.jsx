import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "../utils/api";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCategories().then((categories) => {
      setCategories(categories);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <div className="spinner"></div>;
  return (
    <ul className="category-list">
      {categories.map((category) => {
        return (
          <Link to={`/categories/${category.slug}`} className="category-link">
            <li
              key={category.slug}
              value={category.slug}
              className="category-card"
            >
              <h3><strong>{category.slug}</strong></h3>
              <p>{category.description}</p>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

export default Categories;
