import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import SearchBar from "./components/SearchBar/SearchBar";

import "./App.css";
import { useEffect, useState } from "react";

export interface MovieProps {
  title: string;
  image: string;
  summary: string;
  trailer: string;
  genre: string;
}

const App = () => {
  const [movies, setMovies] = useState<MovieProps[] | []>([]);
  const [activeGenre, setActiveGenre] = useState<string | null>("all");
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchMoviesHandler = async () => {
    const response = await fetch(
      "https://itunes.apple.com/us/rss/topmovies/limit=100/json"
    );
    const data = await response.json();

    const transformedMovies = data.feed.entry.map((movieData: any) => {
      return {
        title: movieData["title"].label,
        image: movieData["im:image"][2].label,
        summary: movieData["summary"].label,
        trailer: movieData["link"][1].attributes.href,
        genre: movieData["category"].attributes.label,
      };
    });
    setMovies(transformedMovies);
  };

  useEffect(() => {
    fetchMoviesHandler();
  }, [movies]);

  const onFilterChangeHandler = (data: string | null): void => {
    setActiveGenre(data);
  };

  useEffect(() => {
    console.log(activeGenre);
  }, [activeGenre]);

  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Main movies={movies} onclick={(e) => onFilterChangeHandler(e)} />
    </div>
  );
};

export default App;
