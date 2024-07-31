import axios from "axios";
import { apiKey } from "../constants";
import { useLoaderData } from "react-router-dom";
import styles from "./Singlemovie.module.css";

export async function loader({ params }) {
  const imdbId = params.imdbId;
  const URL = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbId}&plot=full`;
  try {
    const response = await axios.get(URL);
    return {
      movie: response.data,
      isError: false,
      error: "",
    };
  } catch (error) {
    const errorMessage =
      error?.response?.data?.Error || error.message || "something went wrong";
    return {
      movie: null,
      isError: true,
      error: errorMessage,
    };
  }
}
const Singlemovie = () => {
  const { movie, isError, error } = useLoaderData();
  if (movie && movie.Response === "False") {
    return <div>{movie.Error}</div>;
  }
  if (isError) {
    return <h1>{error}</h1>;
  }
  return (
    <div className={`container ${styles.movieDetail}`}>
      <div className={styles.infoOnLeft}>
        <h2>{movie.Title}</h2>
        <img src={movie.Poster} alt={movie.Title} />

        <p className={styles.infoPara}>
          <span className={styles.key}>Release Date </span>
          <span className={styles.value}>{movie.Released}</span>
        </p>
        <p className={styles.infoPara}>
          <span className={styles.key}> Genre </span>
          <span className={styles.value}> {movie.Genre}</span>
        </p>
        <p className={styles.infoPara}>
          <span className={styles.key}>Runtime </span>
          <span className={styles.value}> {movie.Runtime}</span>
        </p>
        <p className={styles.infoPara}>
          <span className={styles.key}>Language </span>
          <span className={styles.value}>{movie.Language}</span>
        </p>

        <p className={styles.infoPara}>
          <span className={styles.key}>Awards </span>
          <span className={styles.value}> {movie.Awards}</span>
        </p>
      </div>
      <div className={styles.infoOnright}>
        <div className="plot">
          <div className={styles.bigInfo}>
            <h3>Plot</h3>
            <p>{movie.Plot}</p>
          </div>
          <div className={styles.bigInfo}>
            <h3>Actors</h3>
            <p>{movie.Actors}</p>
          </div>
          <div className={styles.bigInfo}>
            <h3>Country</h3>
            <p>{movie.Country}</p>
          </div>
          <h2>More Info</h2>
          <p className={styles.infoPara}>
            <span className={styles.key}>Director </span>
            <span className={styles.value}>{movie.Director}</span>
          </p>
          <p className={styles.infoPara}>
            <span className={styles.key}>imdb Rating </span>
            <span className={styles.value}>{movie.imdbRating}</span>
          </p>
          <p className={styles.infoPara}>
            <span className={styles.key}>imdb Votes </span>
            <span className={styles.value}>{movie.imdbVotes}</span>
          </p>
          <p className={styles.infoPara}>
            <span className={styles.key}>Boxoffice </span>
            <span className={styles.value}>{movie.BoxOffice}</span>
          </p>
          <p className={styles.infoPara}>
            <span className={styles.key}>Metascore</span>
            <span className={styles.value}>{movie.Metascore}</span>
          </p>
          <p className={styles.infoPara}>
            <span className={styles.key}>Rated</span>
            <span className={styles.value}>{movie.Rated}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Singlemovie;
