import { API_KEY } from "../../KEY/movieKey";
import axios from "axios";

const fetchCompleteInformationAboutFilmApi = async movie_Id => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_Id}`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );
    return response.data;
};

export default fetchCompleteInformationAboutFilmApi;
