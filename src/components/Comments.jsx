import { useEffect, useState } from "react";
import { fetchComments } from "../utils/api";
import { fixDate } from "../utils/fixDate";

function Comments({ review_id }) {
  const [comments, setComments] = useState([{}]);

  useEffect(() => {
    fetchComments(review_id).then((filteredComments) => {
      setComments(filteredComments);
    });
  }, [review_id]);

  return (
    <ul>
      {comments.map((reviewComments) => {
        return (
          <li key={reviewComments.body}>
            <h4>{reviewComments.author}</h4>
            <h4>Created: {fixDate(reviewComments.created_at)}</h4>
            <p>{reviewComments.body}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default Comments;
