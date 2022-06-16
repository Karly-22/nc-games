import { fixDate } from "../utils/fixDate";
import { deleteComment } from "../utils/api";

function CommentsCard({ reviewComments }) {

  function handleDelete(event) {
    if (window.confirm('Are you sure you want to delete this comment?')) {
    deleteComment(event.target.value).catch((err) => {
      console.log(err, 'iamerr');
    });
    }
  }

  return (
    <li key={reviewComments.comment_id} className="comments-card">
      <h4>{reviewComments.author}</h4>
      <h4>Created: {fixDate(reviewComments.created_at)}</h4>
      <p>{reviewComments.body}</p>
      <p>{reviewComments.comment_id}</p>
      <button value={reviewComments.comment_id} onClick={handleDelete}>Delete Comment</button>
    </li>
  );
}

export default CommentsCard;
