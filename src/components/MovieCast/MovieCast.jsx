import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { requestMovieCast } from "../../servies/movieApi";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieCast = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await requestMovieCast(movieId);
        setMovieCast(data.cast);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieCast();
  }, [movieId]);

  // const imageDefault =
  //   "https://dummyimage.com/80x120/e3d6e3/080808.jpg&text=No+poster";

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>Something went wrong...</p>}
      {movieCast !== null && (
        <ul className={css.wrapperMovieCast}>
          {movieCast.map(({ id, profile_path, name, character }) => {
            return (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                  alt={name}
                  className={css.img}
                />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
