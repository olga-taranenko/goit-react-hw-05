import { useEffect, useState } from "react";
import { requestTrendingMovies } from "../../servies/movieApi";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendMovies = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const { results } = await requestTrendingMovies();
        setTrendMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrendMovies();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      {isLoading && <Loader />}
      {trendMovies.length > 0 && <MovieList trendMovies={trendMovies} />}
      {error && <p>Something went wrong...</p>}
    </div>
  );
};

export default HomePage;
