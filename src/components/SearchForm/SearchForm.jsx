import { useState } from "react";
import css from "./SearchForm.module.css";

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => setQuery(event.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
    setQuery("");
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        name="query"
        autoFocus
        required
        className={css.input}
      />
      <button type="submit" className={css.btn}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
