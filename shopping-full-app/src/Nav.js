// import React from 'react'
// import { Link } from 'react-router-dom';
// import './App.css';

// const Nav = (props) => {
//   return (
//     <div className='nav'>

//         <div className='logofinal'>
//           MyShop
//         </div>
//         <ul>
//             <li><Link className='link' to="/"><b>Home</b></Link></li>
//             <li><Link className='link'to="/cart"><b>Cart ({props.cartcount})</b></Link></li>
//             <li><Link className='link'to="/contact"><b>Contact</b></Link></li>
//         </ul>
//     </div>
//   )
// }

// export default Nav

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import { Link, useNavigate } from "react-router-dom";
import { products } from "./Data";
import {contxtname} from "./Contxt";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar(props) {
  const navigate = useNavigate();
  var search_val = [];
  const contxtobj = React.useContext(contxtname);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="cart" color="inherit">
          <Link className="link" to="/">
            <HomeIcon />
          </Link>
        </IconButton>
        <Link className="link" to="/">
          <p>Home</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="cart" color="inherit">
          <Badge badgeContent={props.cartcount} color="error">
            <Link className="link" to="/cart">
              <ShoppingCartIcon />
            </Link>
          </Badge>
        </IconButton>
        <Link className="link" to="/cart">
          <p>Cart</p>
        </Link>
      </MenuItem>
      {/* <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem> */}
    </Menu>
  );
  const search_products = (e) => {
    navigate("/searched");
    var searchtext = e.target.value;
    products.map((i) => {
      if (i.name.includes(searchtext)) {
        search_val = [...search_val, i];
        console.log(search_val)
        contxtobj.setSearch(search_val);
      }
    });
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          position: "fixed",
          backgroundColor: "white",
          overflow: "hidden",
          top: "0",
          marginBottom: "70px",
        }}
      >
        <Toolbar>
        <Link className="link" to="/"><Typography
            aria-label="open drawer"
            sx={{
              fontWeight: "1000",
              display: { xs: "block", sm: "block" },
              fontFamily: "'Satisfy', cursive",
              borderRadius: "5px",
              padding: "1.2vw",
              backgroundColor: "#FBB03B",
              margin: "10px",
            }}
          >
            Myshop
          </Typography></Link>

          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "black", cursor: "pointer" }} />
            </SearchIconWrapper>
            <StyledInputBase
              sx={{ color: "black" }}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onKeyUp={search_products}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label=" new notifications"
              color="inherit"
            >
              <Link className="link" to="/">
                <HomeIcon sx={{ color: "#FBB03B" }} />
              </Link>
            </IconButton>
            <IconButton
              size="large"
              aria-label="new notifications"
              color="inherit"
            >
              <Badge badgeContent={props.cartcount} color="error">
                <Link className="link" to="/cart">
                  <ShoppingCartIcon sx={{ color: "#FBB03B" }} />
                </Link>
              </Badge>
            </IconButton>
            {/* <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle sx={{ color: "#FBB03B" }} />
            </IconButton> */}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
              sx={{ backgroundColor: "#FBB03B" }}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
