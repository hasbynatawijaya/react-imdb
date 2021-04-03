import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "./styles.scss";

import useFetch from "../../../utils/useFetch";
import isEmptyObj from "../../../utils/isEmptyObj";

import { getMovieDetails } from "../../../state/redux/movies/actions";
import { movieDetailsSelector } from "../../../state/redux/movies/selectors";

import MovieCard from "../../components/MovieCard";
import BackButton from "../../components/BackButton";
import Loading from "../../components/Loading";

const MovieDetails = () => {
  const params = useParams();
  const movieDetails = useSelector(movieDetailsSelector);

  const { status } = useFetch(getMovieDetails(params.id));

  let renderMovieDetails = null;

  if (status !== "idle") {
    if (status === "fetching") {
      renderMovieDetails = <Loading />;
    } else if (status === "fetched") {
      if (isEmptyObj(movieDetails)) renderMovieDetails = "Data not found";
      else if (!isEmptyObj(movieDetails)) {
        const {
          Title,
          Released,
          Rated,
          imdbRating,
          Genre,
          Plot,
          Writer,
          Awards,
          Actors,
        } = movieDetails;

        renderMovieDetails = (
          <>
            <MovieCard Poster={movieDetails.Poster} />
            <div className="movie-details__info">
              <div>
                <h2>
                  {Title} ( {Released} )
                </h2>
                <h2>{Rated}</h2>
              </div>
              <div>
                <h4>Genre</h4>
                <h5>{Genre}</h5>
              </div>
              <div>
                <h4>IMDB Rating</h4>
                <h5>{imdbRating}</h5>
              </div>
              <div>
                <h4>Synopsis</h4>
                <h5>{Plot}</h5>
              </div>
              <div>
                <h4>Actors</h4>
                <h5>{Actors}</h5>
              </div>
              <div>
                <h4>Writer</h4>
                <h5>{Writer}</h5>
              </div>
              <div>
                <h4>Awards</h4>
                <h5>{Awards}</h5>
              </div>
            </div>
          </>
        );
      }
    }
  }
  return (
    <>
      <BackButton title="Back to movie list" />
      <div className="movie-details">{renderMovieDetails}</div>
    </>
  );
};

export default MovieDetails;
