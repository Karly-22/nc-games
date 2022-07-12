import { useState, useEffect } from "react";
import { fetchReviews } from "../utils/api";
import ReviewCard from "./ReviewCard";
import { useContext } from "react";
import { ThemeContext } from "../contexts/Theme";

function Home() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    fetchReviews("", "votes", "DESC").then((reviewsFromAPI) => {
      setReviews(reviewsFromAPI);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <div className="spinner"></div>;
  return (
    <section className={`homepage-${theme}`}>
      <h2 className={`tag-${theme}`}>Top 3 highest voted games:</h2>
      <ul className={`review-list`}>
        {reviews.map((review) => {
          return <ReviewCard key={review.review_id} review={review} />;
        }).slice(0, 3)}
      </ul>
    </section>
  );
}

export default Home;