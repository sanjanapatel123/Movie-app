import SearchForm from "../components/SearchForm";
import MovieList from "../components/MovieList";
import axios from "axios";
import { apiKey } from "../constants";
import { useLoaderData } from "react-router-dom";

export async function loader({ request }) {

  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search") || "one piece";

  try {
    const EndPoint = `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;
    const reponse = await axios.get(EndPoint);
    return {
      movieApiReponse: reponse.data,
      searchTerm,
      isError: false,
      error: "",
    };
  } catch (error) {
    const errorMessage =
      error?.response?.data?.Error ||
      error.message ||
      "something went wrong...";
    return {
      movieApiReponse: null,
      searchTerm,
      isError: true,
      error: errorMessage,
    };
  }
}

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <SearchForm searchTerm={data.searchTerm}></SearchForm>
      <MovieList data={data}></MovieList>
    </div>
  );
};

export default Home;
