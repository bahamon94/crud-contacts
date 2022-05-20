import React from 'react';
import LazyPage from "../../shared/LazyPage";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import CreatePage  from "./pages/Create";
import List from "./pages/List";
import Remove from "./pages/Remove";
import Edit from "./pages/Edit";

export const ContactRouter = () => {
  return (
    <React.Suspense fallback={ <LazyPage />} >
      <Routes>
        <Route path={'/'} element={ <Home /> } />
        <Route path={'/contacts'} element={ <List /> } />
        <Route path={'/contacts/create'} element={ <CreatePage /> } />
        <Route path={'/contacts/:id/delete'} element={ <Remove /> } />
        <Route path={'/contacts/:id/edit'} element={ <Edit /> } />
      </Routes>
    </React.Suspense>
  );
};
