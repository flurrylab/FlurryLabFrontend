import React from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [anchorElAbout, setAnchorElAbout] = React.useState(null);
  const [anchorElContact, setAnchorElContact] = React.useState(null);
  const navigate = useNavigate();

  const handleOpen = (setter) => (event) => setter(event.currentTarget);
  const handleClose = (setter) => () => setter(null);

  return (
    <AppBar position="static" sx={{ backgroundColor: '#C5D3EB' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: '#1B345D' }}>
          FlurryLab
        </Typography>

        <Button color="inherit" component={Link} to="/">Home</Button>

        <Button
          color="inherit"
          onMouseEnter={handleOpen(setAnchorElAbout)}
          onMouseDown={() => navigate('/about')}
        >
          About
        </Button>
        <Menu anchorEl={anchorElAbout} open={Boolean(anchorElAbout)} onClose={handleClose(setAnchorElAbout)} MenuListProps={{ onMouseLeave: handleClose(setAnchorElAbout) }}>
          <MenuItem component={Link} to="/about#about-us" onClick={handleClose(setAnchorElAbout)}>关于我们</MenuItem>
          <MenuItem component={Link} to="/about#mentors" onClick={handleClose(setAnchorElAbout)}>导师介绍</MenuItem>
          <MenuItem component={Link} to="/about#sharing" onClick={handleClose(setAnchorElAbout)}>互动分享</MenuItem>
        </Menu>

        <Button
          color="inherit"
          onMouseEnter={handleOpen(setAnchorElContact)}
          onMouseDown={() => navigate('/contact')}
        >
          Contact
        </Button>
        <Menu anchorEl={anchorElContact} open={Boolean(anchorElContact)} onClose={handleClose(setAnchorElContact)} MenuListProps={{ onMouseLeave: handleClose(setAnchorElContact) }}>
          <MenuItem component={Link} to="/contact#register" onClick={handleClose(setAnchorElContact)}>立即注册</MenuItem>
          <MenuItem component={Link} to="/contact#form" onClick={handleClose(setAnchorElContact)}>联系我们</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
