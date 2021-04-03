import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const MovieCard = ({
  Title,
  Poster,
  Year,
  imdbID,
  handlePosterPopup,
  showFooter,
}) => {
  return (
    <>
      <div className="movie-card">
        <div
          onClick={
            handlePosterPopup
              ? () => handlePosterPopup(true, Poster)
              : undefined
          }
          className="movie-card__poster-container"
          style={showFooter ? { height: "75%" } : { height: "100%" }}
        >
          <img src={Poster} alt={Title} />
        </div>
        {showFooter && (
          <div className="movie-card__footer">
            <h4 className="movie-card__title">{Title}</h4>
            <div className="movie-card__year-chip">{Year}</div>

            <Link to={`/movie/${imdbID}`}>
              <div className="movie-card__view-details-button">
                View Details
              </div>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default MovieCard;
