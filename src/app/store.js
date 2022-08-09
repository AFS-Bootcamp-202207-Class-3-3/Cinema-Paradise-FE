import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../features/cinema/OrderSlice";
import movieReducer from "../features/cinema/movieSlice";


export const store = configureStore({
  reducer: {
    orderList: orderReducer,
    movieList: movieReducer,
  },
});
