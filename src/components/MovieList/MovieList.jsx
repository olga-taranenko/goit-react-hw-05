// import css from "./MovieList.module.css"

import { Link, useLocation } from "react-router-dom";

const MovieList = ({ trendMovies }) => {
  const location = useLocation();

  return (
    <div>
      <ul>
        {trendMovies.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link state={location} to={`/movies/${id}`}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
