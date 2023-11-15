import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

// OMDB key : 5ca2a2ea
const API_URL = "https://www.omdbapi.com?apikey=5ca2a2ea";

// const movie1 = {
//   Title: "Reign of Judges: Title of Liberty - Concept Short",
//   Year: "2018",
//   imdbID: "tt4275958",
//   Type: "movie",
//   Poster: "https://m.media-amazon.com/images/M/MV5BYWM0MDI1ZmItZTYzNi00ZWVlLTg5MTctNzllNjY2ZTI3NDhhXkEyXkFqcGdeQXVyNDk5MjA2MQ@@._V1_SX300.jpg",
// }; 
// bagian ini sudah tidak diperlukan

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTherms, setSearcTherms] = useState("");

  const seacrhMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    seacrhMovies("doctor strange");
  }, []);

  return (
    <div className="app">
      <h1>MovieList</h1>
      <div className="search">
        <input placeholder="Search for Movie" value={searchTherms} onChange={(e) => setSearcTherms(e.target.value)} />
        <img src={SearchIcon} alt="search" onClick={() => seacrhMovies(searchTherms)} />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} /> 
          ))}
        </div>
      ) : (
        <div className="empty">No Movie Found</div>
      )}
    </div>
  );
};

export default App;
