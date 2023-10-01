import { configureStore } from "@reduxjs/toolkit";
import BookReducer from './slices/booksSlice'
import OneBooks from './slices/oneBooks'

export default configureStore({
    reducer: {
        books: BookReducer,
        oneBooks: OneBooks
    }
});