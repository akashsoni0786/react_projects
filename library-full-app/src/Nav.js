import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import Library from "./Library";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { contextname } from "./MyContext";
import { Tooltip } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
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
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Navbar() {
  return (
    <>
      <Box sx={{ flexGrow: 1, backgroundColor: "none" }}>
        <AppBar
          elevation={0}
          position="static"
          sx={{ backgroundColor: "transparent" }}
        >
          <Toolbar sx={{display:"flex",justifyContent:"space-between"}}>
            <Box sx={{display:"flex",justifyContent:"start"}}>
            <Link to="/">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <img style={{ width: "50px" }} alt="" src="./booklogo.gif" />
              </IconButton>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  fontFamily: "Raleway",

                  flexGrow: 1,
                  margin: "20px 0px",
                  fontWeight: "bold",
                  fontSize: "2vw",
                  color: "orange",
                  display: { sm: "block" },
                }}
              >
                My Library
              </Typography>
            </Link>
            </Box>
              
            <Link to="/library">
              <Tooltip title="Search book  here.....">
                <IconButton>
                  <SearchIcon
                    sx={{
                      color: "orange",
                      fontWeight: "bolder",
                      fontSize: "45px",
                      // marginLeft: "30px",
                    }}
                  />
                </IconButton>
              </Tooltip>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
