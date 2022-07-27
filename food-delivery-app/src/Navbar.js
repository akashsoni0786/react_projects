import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{display:"flex", alignContent: 'center',backgroundColor:"white"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' },
            color:"red",
            backgroundColor:"#6C63FF",margin:"2rem 2rem" }}
          >
            <MenuIcon />
          </IconButton>
          <div style={{width:"100%",margin:"auto",display:"flex",justifyContent:'center',color:"gray"}}>
          <Typography
            variant="span"
            component="p"
            sx={{ flexGrow: .1, display: { xs: 'none', sm: 'block' },fontSize:'13px',margin:"0px 10px"}}
          >
            Break your fast
          </Typography>

          <Typography
            variant="span"
            component="p"
            sx={{ flexGrow: .1, display: { xs: 'none', sm: 'block' },fontSize:'13px',margin:"0px 10px" }}
          >
            Time for lunch
          </Typography>

          <Typography
            variant="span"
            component="p"
            sx={{ flexGrow: .1, display: { xs: 'none', sm: 'block' },fontSize:'13px',margin:"0px 10px",}}
          >
            Can I have snacks
          </Typography>

          <Typography
            variant="span"
            component="p"
            sx={{ flexGrow: .1, display: { xs: 'none', sm: 'block' },fontSize:'13px',margin:"0px 10px"}}
          >
            Dinner
          </Typography>

          <Typography
            variant="span"
            component="p"
            sx={{ flexGrow: .1, display: { xs: 'none', sm: 'block' },fontSize:'13px',margin:"0px 10px"}}
          >
            Burger & Beverages
          </Typography>
          </div>
          
          {/* <Box >
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box> */}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
       
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
