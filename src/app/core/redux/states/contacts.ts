import {Contacts} from "../../models";
import {createSlice} from "@reduxjs/toolkit";
import {contacts} from "./index";

export const ContactsInitialState: { contacts: Contacts[] } = {
  contacts: []
}

export const contactsSlice = createSlice({
  name: 'Contacts',
  initialState: ContactsInitialState,
  reducers: {
    createContact: (state, action) => ({ contacts: { ...state.contacts, ...action.payload} }),
    modifyContact: (state, action) => ({ contacts : { ...state.contacts, ...action.payload}}),
    deleteContact: (state, action) => {
      return { ...state, contacts: state.contacts.filter( contact => contact !== action.payload ) }
    }
  }
})

export const { createContact, modifyContact, deleteContact  } = contactsSlice.actions;

export default contactsSlice.reducer

