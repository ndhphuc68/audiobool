import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: {
    infoUser: {},
  },
  reducers: {
    getInfoUser(state, action) {
      state.infoUser = action.payload;
    },
    clearInfoUser(state) {
      state.infoUser = {};
    },
  },
});

export const { getInfoUser, clearInfoUser } = user.actions;
export default user.reducer;
