import { configureStore } from "@reduxjs/toolkit";
import User from "./User/index";

export default configureStore({
  reducer: {
    user: User,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
