import axios from "axios";
import { urlApi } from "../../api";

export const fetchMovie =  () =>dispatch=> {
  const movies = await axios.get(urlApi('trending/movie/week'));

  return dispatch({
      type:'MOVIE_TRENDING_WEEK',
      payload:movies
  })
};
