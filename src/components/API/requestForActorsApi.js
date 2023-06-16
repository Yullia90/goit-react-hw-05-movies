import { API_KEY } from "KEY/movieKey";
import axios from "axios";


const fetchRequestForActorsApi = async movie_id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits`,
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  return response.data;
};

export default fetchRequestForActorsApi;