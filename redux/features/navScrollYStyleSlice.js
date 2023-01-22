import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const initialState = { addStyle: false,};

const navSlice = createSlice({
  name: "addStyle",
  initialState,
  reducers: {
    addNavStyle(state, action) {
      state.addStyle = !state.addStyle;
    },
  
  },
});

export const { addNavStyle } = navSlice.actions;
export default navSlice.reducer;
