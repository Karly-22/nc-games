import { fixDate } from "../utils/fixDate";

function CommentsCard({reviewComments}) {
  return (
    <li key={reviewComments.comment_id} className="comments-card">
      <h4>{reviewComments.author}</h4>
      <h4>Created: {fixDate(reviewComments.created_at)}</h4>
      <p>{reviewComments.body}</p>
    </li>
  );
}

export default CommentsCard;
