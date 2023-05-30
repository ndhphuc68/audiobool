import { configureStore } from "@reduxjs/toolkit";
import User from "./User/index";
import Category from "./Category/index";
import Book from "./Book/index";

export default configureStore({
  reducer: {
    user: User,
    category: Category,
    book: Book,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
