//contactsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // contacts: ["faisal"],

  contacts: [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phoneNumber: "1234567890",
    },
  ],
};

const contactsSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts.filter((el) => el.id !== action.payload);
    },
    UpdateContact(state, action) {
      const { id, name, email, phoneNumber } = action.payload;
      const target = state.contacts.find((el) => el.id === id);
      if (target) {
        target.name = name;
        target.email = email;
        target.phoneNumber = phoneNumber;
      }
    },
  },
});
export const { addContact, deleteContact, UpdateContact } =
  contactsSlice.actions;
export default contactsSlice.reducer;
