import React from 'react';
import {Avatar, Card, CardHeader,} from "@mui/material";


const InfoContact = () => {
  return (
    <>
      <Card sx={{ maxWidth: '100%' }}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe">
              R
            </Avatar>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
      </Card>
    </>
  );
};

export default InfoContact;
