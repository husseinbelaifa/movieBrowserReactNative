import axios from "axios";
import { urlApi } from "../../api";

export const fetchMovie = () => dispatch => {
  axios.get(urlApi("trending/movie/week")).then(response => {
    return dispatch({
      type: "MOVIE_TRENDING_WEEK",
      movies: response.data
    });
  });
};
