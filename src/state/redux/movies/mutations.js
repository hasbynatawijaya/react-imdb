import actionTypes from "./types";

export const setMovieList = (data) => ({
  type: actionTypes.movieList,
  payload: data,
});

export const setMovieDetails = (data) => ({
  type: actionTypes.movieDetails,
  payload: data,
});
