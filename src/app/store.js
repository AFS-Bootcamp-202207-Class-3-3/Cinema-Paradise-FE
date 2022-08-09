import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../features/cinema/OrderSlice";


export const store = configureStore({
  reducer: {
    currentOrder: orderReducer,
  },
});
