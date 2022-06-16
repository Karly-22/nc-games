import { useState, useEffect } from "react";
import { fetchReviews } from "../utils/api";
import ReviewCard from "./ReviewCard";
import CatDropdown from "./CatDropdown";
import { useParams } from "react-router-dom"

function ReviewsList() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [userSelection, setUserSelection] = useState("");
  const { category } = useParams();
  
  useEffect(() => {
    fetchReviews(category).then((reviewsFromAPI) => {
      setReviews(reviewsFromAPI);
      setIsLoading(false);
    });
  }, [category]);

  if (isLoading) return <div className="spinner"></div>;
  return (
    <main>
        {/* <CatDropdown setUserSelection={setUserSelection}/> */}
      <ul className="review-list">
        {reviews.map((review) => {
          return <ReviewCard key={review.review_id} review={review} />;
        })}
      </ul>
    </main>
  );
}

export default ReviewsList;
