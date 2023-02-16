import React from "react";
import ReactStars from "react-stars";
import "./MovieCard.css";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <h1>{movie.title}</h1>
      <img src={movie.img} alt={movie.title} widht="400px" height="400px" />
      <p>{movie.description}</p>
      <ReactStars
        count={5}
        size={24}
        color2={"#ffd700"}
        value={movie.rating}
        edit={false}
      />
      <Link to={`/movie/${movie.id}`}>
        <h5>See More</h5>
      </Link>
    </div>
  );
};

export default MovieCard;
