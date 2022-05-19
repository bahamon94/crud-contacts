import React from 'react';
import {AppBar, Box, Button, Container, Link, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const pages = [
    {label: 'Contacts', link: '/' },
    {label: 'Create', link: '/create' },
    // {label: 'Edit', link: '/edit' },
    // {label: 'Remove', link: '/remove' },
  ];
  const navigate = useNavigate()

  const handleNavigate = ( route: string ) => {
    navigate(route)
  }
  return (
    <AppBar position="relative" color="info">
      <Container maxWidth="xl">
      <Toolbar>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.link}
                onClick={ ()=> handleNavigate(page.link) }
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

      </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
