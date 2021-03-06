import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedMovie,
  removeSelectedMovies,
} from "../redux/actions/movieActions";

const MovieDetails = () => {
  const { displayTitle } = useParams();
  let movie = useSelector((state) => state.movies.selectedList);
  const {
    display_title,
    headline,
    multimedia,
    summary_short,
    critics_pick,
    link,
    publication_date,
    opening_date,
    date_updated,
  } = movie;
  return (
    <div className="ui grid container">
      {Object.keys(movie).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img
                  className="ui fluid image"
                  src={multimedia.src}
                  alt={display_title}
                  height={multimedia.height}
                  width={multimedia.width}
                />
              </div>
              <div className="column rp">
                <h1>{display_title}</h1>
                <h2>Critics Picks {critics_pick}</h2>
                <h3 className="ui brown block header">{headline}</h3>
                <p>{summary_short}</p>
                <h4>Publication Date: {publication_date}</h4>
                <h4>Opening Date: {opening_date}</h4>
                <h6>Updated : {date_updated}</h6>
                <h5>
                  <a className="meta" href={link.url}>
                    {link.suggested_link_text}
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
