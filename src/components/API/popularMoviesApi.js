import { API_KEY } from "../../KEY/movieKey";
import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';

const fetchPopularMoviesApi = async () => {
    const response = await axios.get(BASE_URL, {
        params: {
            api_key:API_KEY,
        },
    });

    return response.data;
};

export default fetchPopularMoviesApi;