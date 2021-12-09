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
  const [moviesCopy, setMoviesCopy] = useState<MovieProps[] | []>([]);
  const [mainCardMovie, setMainCardMovie] = useState<
    MovieProps | null | undefined
  >();
  const [selectedMovie, setSelectedMovie] = useState<string | null>();
  const [activeGenre, setActiveGenre] = useState<string | null>("all");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // For future use of favorites cart
  const [favorites, setFavorites] = useState<string[]>([]);

  const handleAddToFavorities = (data: string[]) => {
    setFavorites(data);
  };

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
    !moviesCopy.length && setMoviesCopy(transformedMovies);
    setMainCardMovie(transformedMovies[0]);
    setIsLoading(false);
  };

  const onFilterChangeHandler = (data: string | null): void => {
    setActiveGenre(data);
  };

  const movieFilteringHandler = () => {
    const moviesAfterFilters: any[] = [];

    moviesCopy.forEach((movie) => {
      if (movie.genre === activeGenre) {
        moviesAfterFilters.push(movie);
      }

      if (activeGenre === "All") {
        moviesAfterFilters.push(movie);
      }
    });
    setMovies(moviesAfterFilters);
  };

  const onMovieSelectHandler = (data: string | null): void => {
    setSelectedMovie(data);
  };

  const mainCardMovieHandler = () => {
    if (!mainCardMovie) {
      setMainCardMovie(moviesCopy[3]);
    }

    if (mainCardMovie) {
      const selected = moviesCopy.filter(
        (movie) => movie.title === selectedMovie
      );
      setMainCardMovie(selected[0]);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    fetchMoviesHandler();
  }, []);

  useEffect(() => {
    mainCardMovieHandler();
  }, [moviesCopy]);

  useEffect(() => {
    movieFilteringHandler();
  }, [activeGenre]);

  useEffect(() => {
    mainCardMovieHandler();
  }, [selectedMovie]);

  return (
    <div className="App">
      <Header />
      <SearchBar />
      {!isLoading ? (
        <Main
          movies={movies}
          onclick={(e) => onFilterChangeHandler(e)}
          onselect={(e) => onMovieSelectHandler(e)}
          mainCardMovie={mainCardMovie}
          onAddFavorites={(e) => handleAddToFavorities(e)}
        />
      ) : (
        <div className="loading-container">
          <div className="loading-text">
            <span>L</span>
            <span>O</span>
            <span>A</span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
