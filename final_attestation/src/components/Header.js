import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import SchoolIcon from '@mui/icons-material/School';


// const pages = ['Программы обучения', 'Преподаватели', 'Поддержка'];
const settings = ['Профиль'];

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
          >  {/* LOGO */}
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

              <a href='/support'>
                <MenuItem key='Поддержка' onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>Поддержка</Typography>
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
            {/* LOGO */}
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

            <a href='/support'>
              <Button
                key='Поддержка'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Поддержка
              </Button>
            </a>


          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Avatar" src="" />
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
              {/* <a href='/registration'> */}
                <MenuItem key='Войти' onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>Войти</Typography>
                </MenuItem>
              {/* </a> */}


            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;

