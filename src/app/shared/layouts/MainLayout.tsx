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
        alignItems="end"
      >
        <div className="mt-2r">
          { children }
        </div>
      </Grid>
    </>
  );
};

export default MainLayout;