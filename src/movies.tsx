import "./styles/style.css";
import { MovieList } from "./components/MovieList";
import MovieProps from "./interfaces/MovieProps";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { MovieDetails } from "./components/MovieDetails";
import SearchInput from "./components/SearchInput";
import { genericSearch } from "./utils/genericSearch";
import Sorters from "./components/Sorters";
import ISorter from "./interfaces/ISorter";
import { genericSort } from "./utils/genericSort";

function Movies() {
  const [query, setQuery] = useState<string>("");
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [activeSorter, setActiveSorter] = useState<ISorter<MovieProps>>({
    property: "title",
    isDescending: true,
  });
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/films/?format=json")
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const moviesList = movies
    .filter((movie) =>
      genericSearch<MovieProps>(movie, ["title", "episode_id"], query)
    )
    .sort((movieA, movieB) =>
      genericSort<MovieProps>(movieA, movieB, activeSorter)
    );

  return (
    <div style={{ display: "block" }}>
      <div
        style={{
          border: "1px solid lightgrey",
          height: "60px",
          display: "flex",
          backgroundColor: "lightgray",
        }}
      >
        <Sorters<MovieProps>
          object={moviesList[0]}
          onChangeSorter={(property, isDescending) => {
            setActiveSorter({
              property,
              isDescending,
            });
          }}
        />
        <SearchInput onChangeSearchQuery={(query) => setQuery(query)} />
      </div>
      <div style={{ display: "flex", height: "760px" }}>
        <div className="movieListDiv">
          {moviesList.map((movie) => (
            <MovieList key={movie.episode_id} {...movie} />
          ))}
        </div>
        <div style={{ width: "50%" }}>
          {moviesList.map((movie) => (
            <MovieDetails key={movie.episode_id} {...movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Movies;