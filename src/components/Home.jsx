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
    <section>
      <h3 className="homepage-header">Top 3 highest voted games:</h3>
      <ul className={`review-list-${theme}`}>
        {reviews.map((review) => {
          return <ReviewCard key={review.review_id} review={review} />;
        }).slice(0, 3)}
      </ul>
    </section>
  );
}

export default Home;