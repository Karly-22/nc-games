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

  if (isLoading) return <p>... loading</p>;
  return (
    <ul>
      {categories.map((category) => {
        return (
          <li key={category.slug} value={category.slug}>
            <Link to={`/categories/${category.slug}`}>
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
