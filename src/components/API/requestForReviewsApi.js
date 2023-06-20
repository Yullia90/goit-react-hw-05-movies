import { API_KEY } from "../../KEY/movieKey";
import axios from "axios";

const fetchRequestForReviewsApi = async movie_Id => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie_Id}/reviews`, {
        params: {
            api_key: API_KEY,
        },
    }
    );
    return response.data;
};
export default fetchRequestForReviewsApi;