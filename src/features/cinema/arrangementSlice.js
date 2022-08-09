import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    "time": "11:00",
    "room": "room 1",
    "movieId": "movieId 1",
    "cinemaId": "cinemaId 1",
    "price": 54,
    "id": "1"
  },
];

const arrangementSlice=createSlice({
  name:"arrangements",
  initialState,
  reducers:{
    addArrangements: (state, action) => {
      return action.payload;
    },
  }
})

export const{addArrangements}=arrangementSlice.actions;
export default arrangementSlice.reducer;