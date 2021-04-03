import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactModal from "react-modal";

import "./style.scss";

import {
  getMovieList,
  resetMovieList,
} from "../../../state/redux/movies/actions";
import { movieListSelector } from "../../../state/redux/movies/selectors";

import useFetch from "../../../utils/useFetch";

import MovieCard from "../../components/MovieCard";
import Loading from "../../components/Loading";

const Movies = (props) => {
  const dispatch = useDispatch();
  const movieList = useSelector(movieListSelector);

  const query = new URLSearchParams(props.location.search);

  const keyword = query.get("s") || "";

  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const [selectedPoster, setSelectedPoster] = React.useState("");
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    dispatch(resetMovieList());
  }, [keyword]);

  const { status } = useFetch(getMovieList(keyword, 1), [keyword]);

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage(page + 1);
      dispatch(getMovieList(keyword, page + 1));
    }
  };

  let renderMovieList = null;

  const handlePosterPopup = (isOpen, poster) => {
    setIsOpenModal(isOpen);
    setSelectedPoster(poster);
  };

  if (status !== "idle") {
    if (status === "fetching") {
      renderMovieList = <Loading />;
    } else if (status === "fetched") {
      if (movieList.length === 0)
        renderMovieList = (
          <h1 className="movie-list__not-found">
            Movies not found try to search it above or try another keyword
          </h1>
        );
      else if (movieList.length > 0) {
        renderMovieList = movieList.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            {...movie}
            handlePosterPopup={handlePosterPopup}
            showFooter
          />
        ));
      }
    }
  }

  return (
    <>
      <div className="movie-list" id="list">
        {renderMovieList}
      </div>
      <ReactModal
        isOpen={isOpenModal}
        className="poster-popup"
        onRequestClose={() => setIsOpenModal(false)}
      >
        <img src={selectedPoster} height="100%" width="100%" />
      </ReactModal>
    </>
  );
};

export default Movies;
