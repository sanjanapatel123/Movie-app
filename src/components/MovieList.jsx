import MovieCard from "./MovieCard";
import styles from "./MovieList.module.css";

const MovieList = ({ data }) => {
  const { movieApiReponse, error, isError } = data;
  if (isError) {
    return <h1>{error}</h1>;
  }
  if (movieApiReponse && movieApiReponse.Response === "False") {
    return <h1>{movieApiReponse.Error}</h1>;
  }
  return (
    <div className={`container ${styles.movieList}`}>
      {movieApiReponse.Search.map((movie) => {
        return <MovieCard key={movie.imdbID} {...movie}></MovieCard>;
      })}
    </div>
  );
};

export default MovieList;
