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
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          name="username"
          onChange={handleChangeUsername}
        ></input>
      </label>
      <br></br>
      <label>
        Write a comment:
        <input
          type="text"
          value={body}
          name="new-comment"
          onChange={handleChangeComments}
        ></input>
      </label>
      <button type="submit" onSubmit={handleSubmit} disabled={isSubmitting}>
        Submit
      </button>
      <p>{error ? messageToUser : isSubmitting ? "Submitted!" : null}</p>
    </form>
  );
}

export default AddComment;
