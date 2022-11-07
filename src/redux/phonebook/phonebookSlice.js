import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    addContactAction: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },

    onDeleteContactAction: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContactAction, onDeleteContactAction } =
  phonebookSlice.actions;

export default phonebookSlice.reducer;
