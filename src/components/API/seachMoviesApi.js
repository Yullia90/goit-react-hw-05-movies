import { API_KEY } from "KEY/movieKey";
import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

const fetchSearchMoviesApi = async search => {
    const response = await axios.get(BASE_URL, {

        params: {
            api_key: API_KEY,
            query: search,
        },
    });
    return response.data;
};
export default fetchSearchMoviesApi;