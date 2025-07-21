import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "@/components/task1/redux/products/productsSlice";
import postsReducer from "@/components/task2/redux/posts/postsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    posts: postsReducer,
  },
});
