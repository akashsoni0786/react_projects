import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
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
    <AppBar
      position="static"
      elevation={0}
      sx={{ backgroundColor: "transparent" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            style={{
              width: "300px",
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
            alt=""
            src="https://university.adespresso.com/wp-content/themes/ae-brew-child/library/images/logo-university.png"
          />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none",},
              }}
            >
              <MenuItem key="logo" onClick={handleCloseNavMenu}>
                <img
                  style={{
                    backgroundColor:"#4c70ba" ,
                    width: "300px",
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                  }}
                  alt=""
                  src="https://university.adespresso.com/wp-content/themes/ae-brew-child/library/images/logo-university.png"
                />
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Tooltip title="Subscribe">
                  <Button
                    sx={{ backgroundColor: "green", margin: "0px 20px",height:"30px" }}
                    variant="contained"
                  >
                    Subscribe
                  </Button>
                </Tooltip>
                <Typography >or</Typography>

                <Tooltip title="Login">
                  <Button
                    sx={{ backgroundColor: "#1c5bd8", margin: "0px 20px",height:"30px" }}
                    variant="contained">
                    Login
                  </Button>
                </Tooltip>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                sx={{ my: 2, color: "white", display: "block",height:"30px" }}
              >
                {''}
              </Button>
            ))}
          </Box>
          <Box sx={{display: { xs: "none", md: "block" },}}>
          <Box sx={{ flexGrow: 0, display: "flex",}}>
            <Tooltip title="Subscribe">
              <Button
                sx={{ backgroundColor: "green",height:"30px"  }}
                variant="contained"
              >
                Subscribe
              </Button>
            </Tooltip>
            <Typography sx={{margin:"5px 15px"}}>or</Typography>

            <Tooltip title="Login">
              <Button
                sx={{ backgroundColor: "#1c5bd8",height:"30px" }}
                variant="contained"
              >
                Login
              </Button>
            </Tooltip>
          </Box>
          </Box>
          

          <Box sx={{ flexGrow: 0, display: "flex" }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                my: 2,
                color: "white",
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
