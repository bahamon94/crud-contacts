import {createSlice} from "@reduxjs/toolkit";
import {StateContact} from "../models/StateContact";

export const ContactsInitialState: StateContact = {
  contacts: []
}

export const contactsSlice = createSlice({
  name: 'Contacts',
  initialState: ContactsInitialState,
  reducers: {
    createContact: (state, action) => ({contacts:[...state.contacts, action.payload]  }),
    modifyContact: (state, action) => ({contacts : { ...state.contacts, ...action.payload}}),
    removeContact: (state, action) => {
      return { contacts: state.contacts.filter( contact => contact.id !== action.payload.id ) }
    }
  }
})

export const { createContact, modifyContact, removeContact  } = contactsSlice.actions;

export default contactsSlice.reducer

