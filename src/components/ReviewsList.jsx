import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../utils/api";
import ReviewCard from "./ReviewCard";
import Filters from "./Filters";
import { useContext } from "react";
import { ThemeContext } from "../contexts/Theme";

function ReviewsList() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("created_at");
  const [orderBy, setOrderBy] = useState("DESC");
  const { category } = useParams();
  const theme = useContext(ThemeContext);

  useEffect(() => {
    fetchReviews(category, sortBy, orderBy).then((reviewsFromAPI) => {
      setReviews(reviewsFromAPI);
      setIsLoading(false);
    });
  }, [category, sortBy, orderBy]);

  if (isLoading) return <div className="spinner"></div>;
  return (
    <section>
      <Filters setSortBy={setSortBy} sortBy={sortBy} orderBy={orderBy} setOrderBy={setOrderBy}/>
      <ul className={`review-list-${theme}`}>
        {reviews.map((review) => {
          return <ReviewCard key={review.review_id} review={review} />;
        })}
      </ul>
    </section>
  );
}

export default ReviewsList;
