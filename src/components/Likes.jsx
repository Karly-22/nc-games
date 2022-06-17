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
    <section className="likes">
      <h4>{votes + likes} likes</h4>
      <button
        onClick={handleLike}
        style={{
          backgroundColor: isActive ? "green" : "",
          color: isActive ? "white" : "",
        }}
      >
        <span>{isActive ? "Liked!" : "Like"}</span>
      </button>
    </section>
  );
}

export default Likes;
