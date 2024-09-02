import css from "./MovieDetailsPage.module.css";

import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { requestMovieDetails } from "../../servies/movieApi";
import Loader from "../../components/Loader/Loader";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();

  const backLinkRef = useRef(location?.state ?? "/");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await requestMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkRef.current} className={css.linkBack}>
        <MdOutlineKeyboardBackspace />
        &ensp; Go back
      </Link>
      {movieDetails !== null && <MovieInfo {...movieDetails} />}
      {isLoading && <Loader />}
      {error && <p>Something went wrong...</p>}
    </div>
  );
};

export default MovieDetailsPage;
