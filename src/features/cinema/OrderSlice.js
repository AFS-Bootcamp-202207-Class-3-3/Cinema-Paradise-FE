import { createSlice } from "@reduxjs/toolkit";


export const orderSlice = createSlice({
  name: "OrderList",
  initialState: [],
  reducers: {
    initData: (_, action) => {
      return action.payload;
    },
  },
});

export const {initData} = orderSlice.actions;
export default orderSlice.reducer;