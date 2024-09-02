import { NavLink, Outlet } from "react-router-dom";
import css from "./MovieInfo.module.css";

const MovieInfo = ({ poster_path, title, vote_average, overview, genres }) => {
  return (
    <div>
      <div className={css.wrapperMovieInfo}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          className={css.image}
        />
        <div>
          <h2>
            <b>{title}</b>
          </h2>
          <p>User score: {Math.round(vote_average * 10)}%</p>
          <p>
            <b>Overview</b>
          </p>
          <p>{overview}</p>
          <p>
            <b>Genres</b>
          </p>
          <p>{genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>
      <div className={css.wrapperAddInfoLink}>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
      <div className={css.wrapperAddInfo}>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieInfo;
