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
    alert("Message was posted");
    event.preventDefault();
      postComment(review_id, username, body).then(() => {setComments()});
  }

  return (
    <form>
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
      <input type="submit" value="submit" onClick={handleSubmit}/>
    </form>
  );
}

export default AddComment;
