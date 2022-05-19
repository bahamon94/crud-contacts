import React from 'react';
import LazyPage from "../../shared/LazyPage";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import CreatePage  from "./pages/Create";

export const ContactRouter = () => {
  return (
    <React.Suspense fallback={ <LazyPage />} >
      <Routes>
        <Route path={'/'} element={ <Home /> } />
        <Route path={'/create'} element={ <CreatePage /> } />
      </Routes>
    </React.Suspense>
  );
};
