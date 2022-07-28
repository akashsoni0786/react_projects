import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const drawerWidth = 200;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Food Funda
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <ListItemText primary="Break your fast" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <Link to="/lunch" style={{ textDecoration: "none" }}>
              <ListItemText primary="Time for lunch" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <Link to="/snacks" style={{ textDecoration: "none" }}>
              <ListItemText primary="Can I have snacks" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <Link to="/dinner" style={{ textDecoration: "none" }}>
              <ListItemText primary="Dinner" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <Link to="/burgers" style={{ textDecoration: "none" }}>
              <ListItemText primary=" Burger & Beverages" />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          display: "flex",
          alignContent: "center",
          backgroundColor: "white",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: "none" },
              color: "white",
              backgroundColor: "#b71c1c",
              margin: "2rem 2rem",
            }}
          >
            <MenuIcon />
          </IconButton>
          <div
            style={{
              width: "100%",
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              color: "gray",
            }}
          >
            <Link to="/" style={{ textDecoration: "none",color:"gray" }}>
              <Typography
                variant="span"
                component="p"
                sx={{
                  flexGrow: 0.1,
                  display: { xs: "none", sm: "block" },
                  fontSize: "13px",
                  margin: "0px 10px",
                  cursor: "pointer",
                }}
              >
                Break your fast
              </Typography>
            </Link>
            <Link to="/lunch" style={{ textDecoration: "none",color:"gray" }}>
              <Typography
                variant="span"
                component="p"
                sx={{
                  flexGrow: 0.1,
                  display: { xs: "none", sm: "block" },
                  fontSize: "13px",
                  margin: "0px 10px",
                  cursor: "pointer",
                }}
              >
                Time for lunch
              </Typography>
            </Link>
            <Link to="/snacks" style={{ textDecoration: "none",color:"gray" }}>
              <Typography
                variant="span"
                component="p"
                sx={{
                  flexGrow: 0.1,
                  display: { xs: "none", sm: "block" },
                  fontSize: "13px",
                  margin: "0px 10px",
                  cursor: "pointer",
                }}
              >
                Can I have snacks
              </Typography>
            </Link>
            <Link to="/dinner" style={{ textDecoration: "none",color:"gray" }}>
              <Typography
                variant="span"
                component="p"
                sx={{
                  flexGrow: 0.1,
                  display: { xs: "none", sm: "block" },
                  fontSize: "13px",
                  margin: "0px 10px",
                  cursor: "pointer",
                }}
              >
                Dinner
              </Typography>
            </Link>
            <Link
              to="/burgers"
              style={{ textDecoration: "none",color:"gray"}}
            >
              <Typography
                variant="span"
                component="p"
                sx={{
                  flexGrow: 0.1,
                  display: { xs: "none", sm: "block" },
                  fontSize: "13px",
                  margin: "0px 10px",
                  cursor: "pointer",
                }}
              >
                Burger & Beverages
              </Typography>
            </Link>
          </div>
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
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
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
