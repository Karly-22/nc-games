import { useState } from "react";
import { postComment } from "../utils/api";

function AddComment({ review_id, setComments }) {
  const [username, setUsername] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(false);
  const [messageToUser, setMessageToUser] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChangeUsername(event) {
    setUsername(event.target.value);
  }

  function handleChangeComments(event) {
    setBody(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!event.target[1].value) {
      setError(true);
      return setMessageToUser("Comment section is empty");
    }
    postComment(review_id, username, body)
      .then((res) => {
        setComments((currentComments) => {
          const copy = [res, ...currentComments];
          return copy;
        });
        setIsSubmitting(true);
        setError(false);
      })
      .catch((err) => {
        setError(true);
        setMessageToUser(err.response.data.msg);
      });
  }

  return (
    <section className="form-section">
      <form onSubmit={handleSubmit} className="comment-form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          value={username}
          name="username"
          onChange={handleChangeUsername}
        ></input>
        <br></br>
        <label htmlFor="new-comment">Write a comment:</label>
        <input
          type="text"
          value={body}
          name="new-comment"
          onChange={handleChangeComments}
        ></input>
        <button
          type="submit"
          onSubmit={handleSubmit}
          disabled={isSubmitting}
          className="submit-btn"
        >
          Add comment
        </button>
        <p>{error ? messageToUser : isSubmitting ? "Submitted!" : null}</p>
      </form>
    </section>
  );
}

export default AddComment;
