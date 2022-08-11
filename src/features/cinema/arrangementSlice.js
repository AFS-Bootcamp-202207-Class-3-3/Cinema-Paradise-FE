import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    time: "",
    room: "",
    movieId: "",
    cinemaId: "",
    price: null,
    id: "",
  },
];

const arrangementSlice = createSlice({
  name: "arrangements",
  initialState,
  reducers: {
    addArrangements: (state, action) => {
      return action.payload;
    },
  },
});

export const { addArrangements } = arrangementSlice.actions;
export default arrangementSlice.reducer;
