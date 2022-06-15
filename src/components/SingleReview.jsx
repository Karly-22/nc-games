import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchReviewsById } from "../utils/api";

function SingleReview() {
  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { review_id } = useParams();

  useEffect(() => {
    fetchReviewsById(review_id).then((singleReview) => {
      setReview(singleReview);
      setIsLoading(false);
    });
  }, [review_id]);

  if (isLoading) return <p>... loading</p>;
  return (
    <li>
      <h3>{review.title}</h3>
      <h4>{review.owner}</h4>
      <img src={review.review_img_url} alt={review.title} />
      <h4>Likes: {review.votes}</h4>
      <h4>Comments: {review.comment_count}</h4>
      <p>{review.category}</p>
    </li>
  );
}

export default SingleReview;
