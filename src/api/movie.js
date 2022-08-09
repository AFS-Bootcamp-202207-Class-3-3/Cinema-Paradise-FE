import api from "./api";

export const getMovies = () => {
    return api.get("/movies");
};

export const getMovieDetailsById = (id) => {
    return api.get(`/movies/${id}`);
};