const INITIAL_STATE = {
  movies: []
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action) {
    case "MOVIE_TRENDING_WEEK":
      return { ...state, movies: action.movies };
    default:
      return state;
  }
};

export default movieReducer;
