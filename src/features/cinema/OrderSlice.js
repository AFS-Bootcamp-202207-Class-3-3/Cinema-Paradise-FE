import { createSlice } from "@reduxjs/toolkit";


export const orderSlice = createSlice({
  name: "OrderList",
  initialState: [],
  reducers: {
    initData: (_, action) => {
      return action.payload;
    },
    // addTodo: (state, action) => {
    //   state.push(action.payload);
    // },
    // deleteTodo: (state, action) => {
    //   return state.filter((todo) => todo.id !== action.payload);
    // },
    // toggleTodo: (state, action) => {
    //   return state.map((todo) => {
    //       if (todo.id === action.payload) {
    //         return {...todo, done: !todo.done};
    //       } else {
    //         return todo;
    //       }
    //     }
    //   );
    // },
  },
});

export const {initData} = orderSlice.actions;
export default orderSlice.reducer;