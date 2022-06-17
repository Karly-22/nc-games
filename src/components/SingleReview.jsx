import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchReviewsById } from "../utils/api";
import Likes from "./Likes";
import Comments from "./Comments";
import { fixDate } from "../utils/fixDate";
import { useContext } from "react";
import { ThemeContext } from "../contexts/Theme";

function SingleReview() {
  const { theme } = useContext(ThemeContext);
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
    <li className={`review-page_${theme}`}>
      <h3>{review.title}</h3>
      <img
        className={`review-img_${theme}`}
        src={review.review_img_url}
        alt={review.title}
      />
      <span className="author-details">
        <img
          src="https://www.primaryteaching.co.uk/prodimg/imgperrgb/PA177.png"
          alt="author"
          className="author-img"
        />
        <p>{review.owner}</p>
        <p>{fixDate(review.created_at)}</p>
      </span>
      <span>
        <h4>{review.designer}</h4>
        <h4>{review.category}</h4>
        <Likes review_id={review_id} votes={review.votes} />
        <h4>{review.comment_count} comments</h4>
      </span>
      <p className={`review-body_${theme}`}>{review.review_body}</p>

      <Comments review_id={review_id} />
    </li>
  );
}

export default SingleReview;
