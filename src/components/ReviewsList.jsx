import { useState, useEffect } from "react";
import { fetchReviews } from "../utils/api";
import ReviewCard from "./ReviewCard";
import CatDropdown from "./CatDropdown";

function ReviewsList() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userSelection, setUserSelection] = useState("");
  
  useEffect(() => {
    fetchReviews(userSelection).then((reviewsFromAPI) => {
      setReviews(reviewsFromAPI);
      setIsLoading(false);
    });
  }, [userSelection]);

  if (isLoading) return <div className="spinner"></div>;
  return (
    <main>
        <CatDropdown setUserSelection={setUserSelection}/>
      <ul className="review-list">
        {reviews.map((review) => {
          return <ReviewCard key={review.review_id} review={review} />;
        })}
      </ul>
    </main>
  );
}

export default ReviewsList;
