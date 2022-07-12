import { fixDate } from "../utils/fixDate";
import { deleteComment } from "../utils/api";
import { useState } from "react";

function CommentsCard({ reviewComments, setComments }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [err, setErr] = useState(false);

  function handleDelete(event) {
    if (window.confirm("Are you sure you want to delete this comment?")) {
      setErr(false);
      setComments((currentComments) => {
        return currentComments.filter((comment) => {
          return comment.comment_id !== event.target.value;
        });
      });
      setIsDeleting(true);
      deleteComment(event.target.value).catch((err) => {
        setIsDeleting(false);
        setErr("Something went wrong! Please try again.");
      });
    }
  }

  return (
    <li key={reviewComments.comment_id} className="comments-card">
      <hr></hr>
      <span className="comment-area">
        <span className="paragraph">
      <p>
        <strong>{reviewComments.author}</strong> on{" "}
        <em>{fixDate(reviewComments.created_at)}</em>
      </p>
      <p>{reviewComments.body}</p>
      <p>{isDeleting ? "Deleting..." : null}</p>
      <p>{err ? err : null}</p></span>
      <button
        value={reviewComments.comment_id}
        onClick={handleDelete}
        disabled={isDeleting}
      >
        Delete
      </button></span>
    </li>
  );
}

export default CommentsCard;
