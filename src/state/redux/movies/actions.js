import axios from "axios";

import { setMovieList, setMovieDetails } from "./mutations";

export const getMovieList = (keyword, page) => async (dispatch, state) => {
  try {
    const prevData = state().movies.movieList;

    const response = await axios.get("", {
      params: {
        apikey: "faf7e5bb",
        s: keyword,
        page: page,
      },
    });

    if (response.data) {
      if (response.data.Search) {
        dispatch(setMovieList(prevData.concat(response.data.Search)));
      }
    }
  } catch (error) {
    throw error;
  }
};

export const getMovieDetails = (imdbID) => async (dispatch) => {
  try {
    const response = await axios.get("", {
      params: {
        apikey: "faf7e5bb",
        i: imdbID,
      },
    });

    dispatch(setMovieDetails(response.data));
  } catch (error) {
    throw error;
  }
};
