import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../redux/actions/movieActions";
import MovieComponent from "./MovieComponent";

const MovieListing = () => {
  const movies = useSelector((state) => state.allMovies.movies);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get(
        "https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=F493stB50gvFVeedyFlTKBA9UzA7odGY"
      )
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setMovies(response.data.results));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Movies :", movies);
  return (
    <div className="ui grid container">
      <MovieComponent />
    </div>
  );
};

export default MovieListing;
