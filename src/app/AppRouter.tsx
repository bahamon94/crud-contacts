import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { WrapperHeader } from './shared/Header/hoc/WrapperHeader'
import {ContactRouter} from "./feature/contacts/Contacts.router";

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <WrapperHeader/>
          <Routes>
            <Route path={'/*'} element={ <ContactRouter /> } />
          </Routes>
      </BrowserRouter>

    </>
  );
}
