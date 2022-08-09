import { configureStore } from "@reduxjs/toolkit";
import arrangementSlice from "../features/cinema/arrangementSlice";
import orderReducer from "../features/cinema/OrderSlice";
import movieReducer from "../features/cinema/movieSlice";


export const store = configureStore({
  reducer: {
    currentOrder: orderReducer,
    arrangementList:arrangementSlice,
    movieList: movieReducer,
  },
});
