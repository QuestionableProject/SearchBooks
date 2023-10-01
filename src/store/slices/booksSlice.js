import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
    name: 'books',
    initialState: {
        books: null,
        countItems: 0,
        categories: null,
        sort: null,
        request: null,
    },
    reducers: {
        addBooks(state, action) {
            state.books = [...action.payload.items]
            state.countItems = action.payload.totalItems
            state.categories = action.payload.categories
            state.sort = action.payload.sort
            state.request = action.payload.request
        },
        paginationBooks(state, action) {
            state.books.push(
                ...action.payload.items
            )       
            state.countItems = action.payload.totalItems
            state.categories = action.payload.categories
            state.sort = action.payload.sort
            state.request = action.payload.request
        },
    },
})

export const {addBooks, paginationBooks, updateBooks} = booksSlice.actions;

export default booksSlice.reducer;