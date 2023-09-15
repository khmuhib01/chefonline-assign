import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    // Add other reducers if you have them
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
