import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchReviewsById } from "../utils/api";
import Likes from "./Likes";
import Comments from "./Comments";

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
    <li className="review-page">
      <img className="review-img" src={review.review_img_url} alt={review.title} />
      <h3>{review.title}</h3>
      <h4>{review.owner}</h4>
      <Likes review_id={review_id} votes={review.votes}/>
      <h4>Comments: {review.comment_count}</h4>
      <p>{review.review_body}</p>
      <Comments review_id={review_id}/>
    </li>
  );
}

export default SingleReview;
