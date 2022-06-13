import { useState, useEffect } from "react";
import { fetchReviews } from "../utils/api";
import ReviewCard from "./ReviewCard";

function ReviewsList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
      fetchReviews().then((reviewsFromAPI) => {
          setReviews(reviewsFromAPI);
      })
  }, []);

  return (
    <ul>
      {reviews.map((review) => {
        return <ReviewCard key={review.review_id} review={review} />;
      })}
    </ul>
  );
}

export default ReviewsList;
