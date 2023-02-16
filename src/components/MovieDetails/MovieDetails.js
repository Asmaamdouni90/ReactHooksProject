import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const MovieDetails = ({ movies }) => {
  let { id } = useParams();
  const [chosen, setChosen] = useState({});
  console.log(movies);

  useEffect(() => {
    setChosen(movies.filter((movie) => movie.id === id)[0]);
  }, [movies]);
  return (
    <div>
      <h1>{chosen.title}</h1>
      <iframe
        width="560"
        height="315"
        src={chosen.trailer}
        title={chosen.title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <h3>{chosen.description}</h3>
    </div>
  );
};

export default MovieDetails;
