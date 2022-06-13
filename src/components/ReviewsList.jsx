import { useState } from 'react';

function ReviewsList() {
    const [reviews, setReviews] = useState([{
        "review_id": 14,
        "owner": "cooljmessy",
        "title": "Velit tempor ullamco amet ipsum dolor voluptate.",
        "category": "hidden-roles",
        "review_img_url": "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg",
        "created_at": "2021-02-05T11:27:26.563Z",
        "votes": 3,
        "comment_count": 0
      }])

  return (
    <ul>
        {reviews.map((review) => {
            console.log(review);
            return (
                <li key={review.review_id}>
                    <h3>{review.title}</h3>
                </li>
            )
        })}
    </ul>
  )
}

export default ReviewsList