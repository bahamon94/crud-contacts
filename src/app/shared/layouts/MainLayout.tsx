import React from 'react';
import {Grid} from "@mui/material";

interface MainLayoutProps {}

const MainLayout:React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
          { children }
      </Grid>
    </>
  );
};

export default MainLayout;