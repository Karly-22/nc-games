import { useState } from "react";
import { postComment } from "../utils/api";

function AddComment({ review_id, setComments }) {
  const [username, setUsername] = useState("");
  const [body, setBody] = useState("");

  function handleChangeUsername(event) {
    setUsername(event.target.value);
  }

  function handleChangeComments(event) {
    setBody(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    postComment(review_id, username, body).then((res) => {
      setComments((currentComments) => {
        const copy = [res, ...currentComments];
        return copy;
      });
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
      <label>
        Write a comment:
        <input
          type="text"
          value={body}
          name="new-comment"
          onChange={handleChangeComments}
        ></input>
      </label>
      <button type="submit" onSubmit={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export default AddComment;
