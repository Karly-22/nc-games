import { useEffect, useState } from "react";
import { fetchComments } from "../utils/api";
import CommentsCard from "./CommentsCard";

function Comments({ review_id }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments(review_id).then((filteredComments) => {
      setComments(filteredComments);
    });
  }, []);

  return (
    <section>
        <h4>Comments:</h4>
      <ul className="comment-list">
        {comments.map((reviewComments) => {
          return (
            <CommentsCard
              key={reviewComments.comment_id}
              reviewComments={reviewComments}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default Comments;
