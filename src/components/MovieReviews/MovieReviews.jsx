import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { requestMovieReviews } from "../../servies/movieApi";
// import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieReviews = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await requestMovieReviews(movieId);
        setMovieReviews(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>Something went wrong...</p>}
      {movieReviews.length > 0 ? (
        <ul>
          {movieReviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p>
                  <b>Author: {author}</b>
                </p>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don&apos;t have any reviews for this movie</p>
      )}
    </div>
  );
};

export default MovieReviews;
