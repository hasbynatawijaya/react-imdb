import actionTypes from "./types";

const initialState = {
  movieList: [],
  movieDetails: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.movieList:
      return {
        ...state,
        movieList: action.payload,
      };
    case actionTypes.movieDetails:
      return {
        ...state,
        movieDetails: action.payload,
      };
    default:
      return state;
  }
};
