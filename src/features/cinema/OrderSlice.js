import {createSlice} from "@reduxjs/toolkit";

const initialState={
  cinema:"旺旺",
};
// const initialState={};


export const orderSlice = createSlice({
  name: "currentOrder",
  initialState,
  reducers: {
    addContent:(state,action) =>{
      state = {...state, ...action.payload};
      console.log(state);
      return state;
    }
  },
});

export const {initData,addContent} = orderSlice.actions;
export default orderSlice.reducer;
