import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import orderReducer from "../features/cinema/OrderSlice";


export const store = configureStore({
  reducer: {
    todoList: todoReducer,
    orderList: orderReducer,
  },
});
