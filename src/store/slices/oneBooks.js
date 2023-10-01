import { createSlice } from "@reduxjs/toolkit";

const oneBookSlice = createSlice({
    name: 'oneBooks',
    initialState: {
        oneBooks: null,
    },
    reducers: {
        addBook(state, action) {
            state.oneBooks = action.payload
        },
        removeBook(state, action) {

        },
        updateBook(state, action) {
        },
    },
})

export const {addBook, removeBook, updateBook} = oneBookSlice.actions;

export default oneBookSlice.reducer;