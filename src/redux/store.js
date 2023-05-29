import { configureStore } from "@reduxjs/toolkit";
import User from "./User/index";
import Category from "./Category/index";

export default configureStore({
  reducer: {
    user: User,
    category: Category,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
