import { useEffect, useState } from "react";
// import css from "./MoviesPage.module.css";
import { requestMovieSearchByQuery } from "../../servies/movieApi";
import Loader from "../../components/Loader/Loader";
import { useSearchParams } from "react-router-dom";
import SearchForm from "../../components/SearchForm/SearchForm";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [moviesSearch, setMoviesSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query");

  useEffect(() => {
    if (!query) return;

    const fetchMoviesSearch = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const { results } = await requestMovieSearchByQuery(query);
        setMoviesSearch(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesSearch();
  }, [query]);

  const handleSubmit = (value) => {
    setSearchParams({
      query: value,
    });
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      {<MovieList trendMovies={moviesSearch} />}

      {isLoading && <Loader />}
      {error && <p>Something went wrong...</p>}
    </div>
  );
};

export default MoviesPage;
