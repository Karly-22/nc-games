import { Link } from "react-router-dom";

function ReviewCard({ review }) {
  return (
    <li>
      <h3>{review.title}</h3>
      <h4>Written by {review.owner}</h4>
      <Link to={`/reviews/${review.review_id}`}>Read Review</Link>
      <img src={review.review_img_url} alt={review.title} />
      <h4>Likes: {review.votes}</h4>
      <h4>Comments: {review.comment_count}</h4>
      <p>{review.category}</p>
    </li>
  );
}

export default ReviewCard;
