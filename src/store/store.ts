import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import bookReducer from './books/bookSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        book: bookReducer,
        // Add other reducers if you have them
    },
});

export default store;
