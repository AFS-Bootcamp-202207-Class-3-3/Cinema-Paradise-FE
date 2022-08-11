import api from "./api";

export const getMovies = () => {
    return api.get("/movies");
};

export const getMovieDetailsById = (id) => {
    return api.get(`/movies/${id}`);
};

export const getMovieDetailsByName = (name) => {
    // return api.get(`/movies?titleChinese=${name}`);
    return api.get(`/movies/movie/${name}`);
};