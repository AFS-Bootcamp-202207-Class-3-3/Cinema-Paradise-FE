import {createSlice} from "@reduxjs/toolkit";

const initialState={
  "user": "guest",
  "title": "光年正传",
  "price": 46,
  "date": "11-07",
  "time": "11:40",
  "cinema": "旺旺影城",
  "room": "A厅",
  "seat": "7排3列",
  "paid": true,
 };
// const initialState={};


export const orderSlice = createSlice({
  name: "currentOrder",
  initialState,
  reducers: {
    initData: (state, action) => {
      return (action.payload) ;
    },
    addContent:(state,action) =>{
      return action.payload;
    }
  },
});

export const {initData,addContent} = orderSlice.actions;
export default orderSlice.reducer;
