import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import bookReducer from "./books/bookSlice";
import userSlice from "./users/userSlice";
import cartSlice from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    book: bookReducer,
    user: userSlice,
    cart: cartSlice,
    // Add other reducers if you have them
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
