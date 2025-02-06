import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

// Create a Redux store
export const store = configureStore({
  reducer: {
    counter: counterReducer, // We will define counterSlice in the next step
  },
});

// Infer the RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
