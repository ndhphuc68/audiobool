import { createSlice } from "@reduxjs/toolkit";

export const category = createSlice({
  name: "category",
  initialState: {
    category: [],
  },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const { setCategory, getListCategory } = category.actions;
export default category.reducer;
