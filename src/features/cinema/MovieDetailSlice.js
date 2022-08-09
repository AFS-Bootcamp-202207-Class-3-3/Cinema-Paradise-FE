import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const MovieDetailSlice = createSlice({
    name: "MovieDetailSlice",
    initialState,
    reducers: {
        getMovie: (state, action) => {
            return action.payload;
        }
    },
});

export const { getMovie } = MovieDetailSlice.actions;
export default MovieDetailSlice.reducer;