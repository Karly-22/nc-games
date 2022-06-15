import axios from "axios";

const gamesAPI = axios.create({
  baseURL: "https://karlys-games-app.herokuapp.com/api",
});

export const fetchReviews = (category) => {
  return gamesAPI
    .get("/reviews", {
      params: { category },
    })
    .then(({ data }) => {
      return data.reviews;
    });
};

export const fetchCategories = () => {
  return gamesAPI.get("/categories").then(({ data }) => {
    return data.categories;
  });
};

export const fetchReviewsById = (review_id) => {
  return gamesAPI.get(`/reviews/${review_id}`).then(({ data }) => {
    return data.review;
  });
};

export const patchLikes = (review_id, inc_votes) => {
  return gamesAPI
    .patch(`/reviews/${review_id}`, { inc_votes: inc_votes })
    .then(({ data }) => {
      return data.review;
    });
};

export const fetchComments = (review_id) => {
  return gamesAPI.get(`/reviews/${review_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const postComment = (review_id, username, body) => {
  return gamesAPI
    .post(`/reviews/${review_id}/comments`, {
      username: username,
      body: body
    })
    .then(({ data }) => {
      return data.comments;
    });
};
