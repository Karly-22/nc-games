import { useState } from "react";
import { patchLikes } from "../utils/api";

function Likes({ review_id, votes }) {
  const [likes, setLikes] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function handleLike() {
    if (likes === 0) {
      setLikes((currentLikes) => currentLikes + 1);
      setIsActive(true);
      patchLikes(review_id, 1).catch((err) => {
        setLikes((currentLikes) => currentLikes - 1);
      });
    } else {
      setLikes((currentLikes) => currentLikes - 1);
      setIsActive(false);
      patchLikes(review_id, -1).catch((err) => {
        setLikes((currentLikes) => currentLikes + 1);
      });
    }
  }

  return (
    <div>
      <h4>Likes: {votes + likes}</h4>
      <button
        onClick={handleLike}
        style={{
          backgroundColor: isActive ? "green" : "",
          color: isActive ? "white" : "",
        }}
      >
        Like
      </button>
    </div>
  );
}

export default Likes;
