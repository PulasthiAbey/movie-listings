import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectedMovie } from "../redux/actions/movieActions";

const MovieComponent = () => {
  const movies = useSelector((state) => state.allMovies.movies);
  const dispatch = useDispatch();

  const selectingMovie = (title) => {
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].display_title === title) {
        dispatch(selectedMovie(movies[i]));
      }
    }
  };

  const renderList = movies.map((movie) => {
    const { display_title, multimedia, summary_short, critics_pick } = movie;
    return (
      <div
        className="four wide column"
        key={display_title}
        onClick={selectingMovie(display_title)}
      >
        <Link to={`/movies/${display_title}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img
                  src={multimedia.src}
                  alt={display_title}
                  height={multimedia.height}
                  width={multimedia.width}
                />
              </div>
              <div className="content">
                <div className="header">{display_title}</div>
                <h4 className="header">{summary_short}</h4>
                <div className="meta price">Critics Pick {critics_pick}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default MovieComponent;
