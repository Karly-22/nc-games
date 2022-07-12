import { useEffect, useState } from "react";
import { fetchComments } from "../utils/api";
import CommentsCard from "./CommentsCard";
import AddComment from "./AddComment";

function Comments({ review_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchComments(review_id).then((filteredComments) => {
      setComments(filteredComments.reverse());
    });
    setIsLoading(true)
  }, [comments, review_id]);

  return (
    <>
    {isLoading ? 
    <section>
      <fieldset>
      <h4>Join the conversation...</h4>
        <AddComment
          setComments={setComments}
          review_id={review_id}
        />
        <ul className="comment-list_light">
          {comments.map((reviewComments) => {
            return (
              <CommentsCard
                key={reviewComments.comment_id}
                reviewComments={reviewComments}
                setComments={setComments}
                comments={comments}
              />
            );
          })}
        </ul>
      </fieldset>
    </section> : null }
    </>
  );
}

export default Comments;
