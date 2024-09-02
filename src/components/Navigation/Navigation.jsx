import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  return (
    <header>
      <nav className={css.nav}>
        <NavLink
          className={({ isActive }) =>
            clsx(css.navLink, isActive && css.navLinkActive)
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(css.navLink, isActive && css.navLinkActive)
          }
          to="/movies"
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
