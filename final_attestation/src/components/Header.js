import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import SchoolIcon from '@mui/icons-material/School';

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <a href='/'>
            <SchoolIcon fontSize="large" sx={{ display: { xs: 'none', md: 'flex' }, mr: 3 }} />
          </a>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >  
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >

              <a href='/programs'>
                <MenuItem key='Программы обучения' onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>Программы обучения</Typography>
                </MenuItem>
              </a>

              <a href='/lecturers'>
                <MenuItem key='Преподаватели' onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>Преподаватели</Typography>
                </MenuItem>
              </a>

            </Menu>
          </Box>

          <a href='/'>
            <SchoolIcon fontSize="large" sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          </a>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >           
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <a href='/programs'>
              <Button
                key='Программы обучения'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Программы обучения
              </Button>
            </a>

            <a href='/lecturers'>
              <Button
                key='Преподаватели'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Преподаватели
              </Button>
            </a>

          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0.949799C14.5804 0.949799 16.9625 1.7766 18.916 3.16757L18.9512 3.19199L18.9805 3.16171L19.1055 3.03671C19.4537 2.68847 20.0043 2.66673 20.377 2.97128L20.4492 3.03671L21.8633 4.45078C22.2115 4.79902 22.2333 5.3496 21.9287 5.72226L21.8633 5.79453L21.7383 5.91953L21.708 5.94882L21.7324 5.98398C23.1234 7.93746 23.9502 10.3196 23.9502 12.9C23.9502 15.4804 23.1234 17.8625 21.7324 19.816L21.708 19.8512L21.7383 19.8805L21.8633 20.0055C22.2115 20.3537 22.2333 20.9043 21.9287 21.2769L21.8633 21.3492L20.4492 22.7633C20.101 23.1115 19.5504 23.1333 19.1777 22.8287L19.1055 22.7633L18.9805 22.6383L18.9512 22.608L18.916 22.6324C16.9625 24.0234 14.5804 24.8502 12 24.8502C9.41906 24.8502 7.03573 24.0239 5.08203 22.6324L5.04688 22.608L5.01758 22.6383L4.89258 22.7633C4.54434 23.1115 3.99375 23.1333 3.62109 22.8287L3.54883 22.7633L2.13477 21.3492C1.78653 21.001 1.76479 20.4504 2.06934 20.0777L2.13477 20.0055L2.25977 19.8805L2.29004 19.8512L2.26562 19.816C0.875075 17.8627 0.0498047 15.48 0.0498047 12.9C0.0498047 10.3196 0.876603 7.93746 2.26758 5.98398L2.29199 5.94882L2.26172 5.91953L2.13672 5.79453C1.78848 5.44629 1.76674 4.8957 2.07129 4.52304L2.13672 4.45078L3.55078 3.03671C3.89902 2.68847 4.44961 2.66673 4.82227 2.97128L4.89453 3.03671L5.01953 3.16171L5.04883 3.19199L5.08398 3.16757C7.03746 1.7766 9.41964 0.949799 12 0.949799ZM15.3047 19.0123C14.3213 19.5461 13.1955 19.8502 12 19.8502C10.8045 19.8502 9.67871 19.5461 8.69531 19.0123L8.66309 18.9947L8.63672 19.0211L6.45508 21.2008L6.41113 21.2437L6.46289 21.2779C8.05192 22.3314 9.95464 22.9498 12 22.9498C14.045 22.9498 15.9482 22.3331 17.5371 21.2799L17.5879 21.2457L15.3369 18.9947L15.3047 19.0123ZM18.0947 9.56308L18.1123 9.59531C18.6461 10.5787 18.9502 11.7045 18.9502 12.9C18.9502 14.0955 18.6461 15.2213 18.1123 16.2047L18.0947 16.2369L20.3457 18.4879L20.3799 18.4371C21.4331 16.8482 22.0498 14.945 22.0498 12.9C22.0498 10.855 21.4331 8.95177 20.3799 7.36288L20.3457 7.3121L18.0947 9.56308ZM3.62012 7.36288C2.56692 8.95177 1.9502 10.855 1.9502 12.9C1.9502 14.9444 2.56749 16.8466 3.62012 18.4352L3.6543 18.4859L3.69727 18.443L5.87891 16.2633L5.90527 16.2369L5.8877 16.2047C5.35393 15.2213 5.0498 14.0955 5.0498 12.9C5.0498 11.7045 5.35393 10.5787 5.8877 9.59531L5.90527 9.56308L3.6543 7.3121L3.62012 7.36288ZM12 7.85019C10.6057 7.85019 9.34355 8.41582 8.42969 9.32968C7.51583 10.2435 6.9502 11.5057 6.9502 12.9C6.9502 15.6886 9.21139 17.9498 12 17.9498C14.7886 17.9498 17.0498 15.6886 17.0498 12.9C17.0498 10.1114 14.7886 7.85019 12 7.85019ZM12 2.85019C9.95503 2.85019 8.05178 3.46691 6.46289 4.52011L6.41211 4.55429L8.66309 6.80527L8.69531 6.78769C9.67871 6.25393 10.8045 5.9498 12 5.9498C13.1955 5.9498 14.3213 6.25393 15.3047 6.78769L15.3369 6.80527L17.5879 4.55429L17.5371 4.52011C15.9482 3.46691 14.045 2.85019 12 2.85019Z" fill="white" stroke="white" strokeWidth="0.1" />
                </svg>

              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <a href='/support'>
                <MenuItem key='Support' onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>FAQ</Typography>
                </MenuItem>
              </a>
              <a href='/info'>
                <MenuItem key='Info' onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>Информация</Typography>
                </MenuItem>
              </a>

            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;

