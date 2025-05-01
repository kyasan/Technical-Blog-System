import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  return (
    <AppBar position="sticky" sx={{ 
      background: 'rgba(10, 10, 10, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(0, 245, 255, 0.1)',
      boxShadow: 'none',
      minHeight: '80px'
    }}>
      <Toolbar sx={{ minHeight: '80px' }}>
        {!isHomePage && (
          <IconButton
            onClick={() => navigate(-1)}
            sx={{
              color: 'primary.main',
              mr: 2,
              '&:hover': {
                backgroundColor: 'rgba(0, 245, 255, 0.1)'
              }
            }}
          >
            <ArrowBackIcon />
          </IconButton>
        )}
        <Typography
          variant="h5"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'primary.main',
            fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: '2rem',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            display: 'flex',
            alignItems: 'center',
            transform: 'translateY(8px)',
            '&:hover': {
              color: 'primary.light'
            }
          }}
        >
          TechChronicle
        </Typography>
        <Button
          component={RouterLink}
          to="/"
          sx={{
            color: 'text.primary',
            fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: '1rem',
            fontWeight: 500,
            letterSpacing: '0.025em',
            textTransform: 'none',
            display: 'flex',
            alignItems: 'center',
            transform: 'translateY(8px)',
            '&:hover': {
              color: 'primary.main',
              backgroundColor: 'rgba(0, 245, 255, 0.1)'
            }
          }}
        >
          Home
        </Button>
        <Button
          component={RouterLink}
          to="/about"
          sx={{
            color: 'text.primary',
            fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: '1rem',
            fontWeight: 500,
            letterSpacing: '0.025em',
            textTransform: 'none',
            display: 'flex',
            alignItems: 'center',
            transform: 'translateY(8px)',
            '&:hover': {
              color: 'primary.main',
              backgroundColor: 'rgba(0, 245, 255, 0.1)'
            }
          }}
        >
          About
        </Button>
        <IconButton
          component={RouterLink}
          to="/profile"
          sx={{
            color: 'text.primary',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: 'translateY(8px)',
            '&:hover': {
              color: 'primary.main',
              backgroundColor: 'rgba(0, 245, 255, 0.1)'
            }
          }}
        >
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 