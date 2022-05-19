import { configureStore } from "@reduxjs/toolkit";
import { contactsSlice } from "./states/contacts";

export interface AppStore {
  contacts: any
}

export default configureStore<AppStore>({
  reducer: {
    contacts: contactsSlice.reducer
  }
})