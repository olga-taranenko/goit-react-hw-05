import axios from "axios";

// "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
// axios.defaults.baseURL = "https://api.themoviedb.org";
// const url =
//   "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMGZhN2ZhMDliNWE3ZTA2OGNmYTgxNjg0ZDBkYmNiMSIsIm5iZiI6MTcyNDg0NjE1OC42OTIwNiwic3ViIjoiNjZjZWYwZWRkZjk5MGU4N2NlZDNlMWFlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.DPmITLmZ_QzQIB4wNvYTkr8OXDQaDfV_jyAUAR4Rn6E",
  },
};

// axios
//   .get(url, options)
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

export const requestTrendingMovies = async () => {
  const { data } = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day?",
    options
  );

  return data;
};

export const requestMovieDetails = async (movieId) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    options
  );
  return data;
};

export const requestMovieCast = async (movieId) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    options
  );
  return data;
};

export const requestMovieReviews = async (movieId) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );
  return data;
};

export const requestMovieSearchByQuery = async (query) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  return data;
};
