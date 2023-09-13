import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    books: [
        {
            id: 1,
            title: 'Title 01',
            author: 'Muhib'
        },
        {
            id: 2,
            title: 'Title 02',
            author: 'Muhib'
        },
        {
            id: 3,
            title: 'Title 03',
            author: 'Muhib'
        },
        {
            id: 4,
            title: 'Title 04',
            author: 'Muhib'
        },
    ],
};

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        addBook: (state, action) => {
            const { title, author } = action.payload;
            if (title.trim() !== '' && author.trim() !== '') {
                state.books.push(action.payload);
            }
        },
        updateBook: (state, action) => {
            const { id, title, author } = action.payload;
            console.log(id)
            console.log(title)
            console.log(author)
            // eslint-disable-next-line
            const bookIndex = state.books.findIndex((book) => book.id == id);
            if (bookIndex !== -1) {
                state.books[bookIndex] = {
                    ...state.books[bookIndex],
                    title,
                    author,
                };
            }
        },
        deleteBook: (state, action) => {
            const { id } = action.payload;
            state.books = state.books.filter((book) => book.id !== id);
        },
    },
});

export const { addBook, updateBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
