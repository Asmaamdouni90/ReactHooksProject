import "./App.css";
import { useState, useEffect } from "react";
import Navv from "./components/Navv/Navv";
import MovieList from "./components/MovieList/MovieList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [movies, setMovies] = useState([
    {
      id: uuidv4(),
      img: "https://m.media-amazon.com/images/M/MV5BNzg0ZTU4OGMtYjdjOS00M2NiLWE3ZGEtZWY0ZDE1MGVmOWQzXkEyXkFqcGdeQXVyMTE1NzQ0OTgw._V1_.jpg",
      description:
        "As Minnie performs a song she wrote for Mickey, called Carried Away, he must protect their canoe from encroaching danger.",
      title: "Carried Away",
      rating: 4,
    },
    {
      id: uuidv4(),
      img: "https://flxt.tmsimg.com/assets/p18957080_b_v13_aa.jpg",
      description:
        " Mickey and his best friends embark on their greatest adventures yet, navigating the curves of a wild and wacky world where Disney magic makes the impossible possible.",
      title: "The world of Mickey",
      rating: 1,
    },
    {
      id: uuidv4(),
      img: "https://m.media-amazon.com/images/M/MV5BNzg0ZTU4OGMtYjdjOS00M2NiLWE3ZGEtZWY0ZDE1MGVmOWQzXkEyXkFqcGdeQXVyMTE1NzQ0OTgw._V1_.jpg",
      description: "The adventures of Mickey and his friends..",
      title: "Mickey Mania",
      rating: 3,
    },
    {
      id: uuidv4(),
      img: "https://m.media-amazon.com/images/M/MV5BNzg0ZTU4OGMtYjdjOS00M2NiLWE3ZGEtZWY0ZDE1MGVmOWQzXkEyXkFqcGdeQXVyMTE1NzQ0OTgw._V1_.jpg",
      description:
        "Follows Funny, an enchanted talking playhouse who leads Mickey Mouse and his pals on imaginative adventures.",
      title: "Mickey's Magical House",
      rating: 5,
    },
    {
      id: uuidv4(),
      img: "https://m.media-amazon.com/images/M/MV5BNzg0ZTU4OGMtYjdjOS00M2NiLWE3ZGEtZWY0ZDE1MGVmOWQzXkEyXkFqcGdeQXVyMTE1NzQ0OTgw._V1_.jpg",
      description:
        " Mickey Mouse and his friends Minnie, Pluto, Goofy, Daisy and Donald embark on fun and outrageous races around the globe and on trips through their hometown of Hot Dog Hills in transforming cars.",
      title: "Mickey and his friends: Top start!",
      rating: 4,
    },
    {
      id: uuidv4(),
      img: "https://flxt.tmsimg.com/assets/p18957080_b_v13_aa.jpg",
      description:
        "Mickey tries to surprise racing champion Jiminy Johnson; Minnie and Daisy search all over Hot Dog Hills for a cat.",
      title: "Mickey's Wild Tire!/Sittin' Kitty",
      rating: 2,
    },
  ]);

  const [inputSearch, setInputSearch] = useState("");
  const [stars, setStars] = useState(5);

  const [filtredMovies, setfiltredMovies] = useState(movies);
  useEffect(() => {
    setfiltredMovies(
      movies.filter((movie) => {
        return (
          movie.title
            .toLocaleLowerCase()
            .includes(inputSearch.toLocaleLowerCase()) && movie.rating >= stars
        );
      })
    );
  }, [stars, inputSearch, movies]);

  return (
    <div className="App">
      <Navv
        movies={movies}
        setMovies={setMovies}
        inputSearch={inputSearch}
        setInputSearch={setInputSearch}
        stars={stars}
        setStars={setStars}
      />
      <MovieList movies={filtredMovies} />
    </div>
  );
}

export default App;
