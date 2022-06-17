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
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const { review_id } = useParams();

  useEffect(() => {
    fetchReviewsById(review_id)
      .then((singleReview) => {
        setReview(singleReview);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(true);
        setErrorMsg(err.response.data.msg);
      });
  }, [review_id]);

  if (error) return <h3>{errorMsg}</h3>;
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
        <article className="author-name">
          <p>
            Reviewed by <strong>{review.owner}</strong>
          </p>
          <p>{fixDate(review.created_at)}</p>
        </article>
      </span>

      <Likes review_id={review_id} votes={review.votes} />

      <p className={`review-body_${theme}`}>{review.review_body}</p>
      <Comments review_id={review_id} />
    </li>
  );
}

export default SingleReview;
