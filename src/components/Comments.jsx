import { useEffect, useState } from "react";
import { fetchComments } from "../utils/api";
import CommentsCard from "./CommentsCard";
import AddComment from "./AddComment";

function Comments({ review_id }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments(review_id).then((filteredComments) => {
      setComments(filteredComments);
    });
  }, [comments, review_id]);

  return (
    <section>
      <h4>Comments:</h4>
      <fieldset>
        <AddComment setComments={setComments} review_id={review_id} />
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
      </fieldset>
    </section>
  );
}

export default Comments;
