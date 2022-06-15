import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchReviewsById } from "../utils/api";
import Likes from "./Likes";
import Comments from "./Comments";
import { fixDate } from "../utils/fixDate";

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

  if (isLoading) return <div className="spinner"></div>;
  return (
    <li className="review-page">
      <h3>{review.title}</h3>
      <h4>{review.owner}</h4><h4>{fixDate(review.created_at)}</h4>
      <img
        className="review-img"
        src={review.review_img_url}
        alt={review.title}
      />
      <Likes review_id={review_id} votes={review.votes} />
      <h4>Comments: {review.comment_count}</h4>
      <h4>{review.category}</h4>
      <h4>{review.designer}</h4>
      <p className="review-body">{review.review_body}</p>
      <section>
        <Comments review_id={review_id} />
      </section>
    </li>
  );
}

export default SingleReview;
