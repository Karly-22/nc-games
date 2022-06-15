import axios from "axios";

const gamesAPI = axios.create({
  baseURL: "https://karlys-games-app.herokuapp.com/api",
});

export const fetchReviews = (category) => {
  return gamesAPI.get("/reviews", {
    params: { category } 
  }).then(({ data }) => {
    return data.reviews;
  });
};

export const fetchCategories = () => {
    return gamesAPI.get("/categories").then(({ data }) => {
      return data.categories;
    });
  };

