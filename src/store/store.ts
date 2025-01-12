import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice"; // Ensure the path is correct

const store = configureStore({
  reducer: {
    products: productReducer, // Setting up the product slice in the store
  },
});

export type RootState = ReturnType<typeof store.getState>; // Optional: RootState type for TypeScript
export type AppDispatch = typeof store.dispatch; // Optional: AppDispatch type for TypeScript

export default store;
