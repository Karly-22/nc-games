import { Link } from "react-router-dom";
import {fixDate} from "../utils/fixDate"

function ReviewCard({ review }) {
  return (
    <li className="review-card">
      <Link to={`/reviews/${review.review_id}`} className="review-link">
      <img
        className="img-list"
        src={review.review_img_url}
        alt={review.title}
      />
      <article className="review-details">
        <p>{review.owner}</p>
        <img></img>
        <p>{fixDate(review.created_at)}</p>
        <p>{review.votes} likes</p>
      </article>
      <h3>{review.title}</h3>
      </Link>
    </li>
  );
}

export default ReviewCard;
