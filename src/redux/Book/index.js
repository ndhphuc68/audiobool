import { createSlice } from "@reduxjs/toolkit";

export const book = createSlice({
  name: "book",
  initialState: {
    listBook: [],
  },
  reducers: {
    setBook(state, action) {
      state.listBook = action.payload;
    },
  },
});

export const { setBook } = book.actions;
export default book.reducer;
