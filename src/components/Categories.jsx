import { useEffect, useState } from "react";
import { fetchCategories } from "../utils/api"

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
          <li>
            <h3>{category.slug}</h3>
            <p>{category.description}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default Categories;
