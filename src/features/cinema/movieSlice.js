import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const movieSlice = createSlice({
    name: "MovieList",
    initialState,
    reducers: {
        getAllMovies: (state, action) => {
            return action.payload;
        },
    },
});

export const { getAllMovies } = movieSlice.actions;
export default movieSlice.reducer;