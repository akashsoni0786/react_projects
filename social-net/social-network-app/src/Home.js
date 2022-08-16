import React from "react";
import "./Home.css";
import "./App.css";
import { styled } from "@mui/material/styles";
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined";
import TextRotationAngleupOutlinedIcon from "@mui/icons-material/TextRotationAngleupOutlined";
import MusicVideoOutlinedIcon from "@mui/icons-material/MusicVideoOutlined";
import Postbox from "./Postbox";
import SearchIcon from "@mui/icons-material/Search";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  IconButton,
  InputBase,
  Modal,
  Tooltip,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import { contextname } from "./Context";
import Search from "@mui/icons-material/Search";
import MyPostbox from "./MyPostBox";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30vw",
  height: "20vw",
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "white",
};
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
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const Home = () => {
  const contxt = React.useContext(contextname);
  return (
    contxt.login && 
    <div className="homepage">
      {contxt.posts.map((i) => {
       
        return <Postbox username={i.author} feeling={i.title} text={i.content} pic={i.contentimg} pid={i.id} />
      })}
    </div>
  );
};

export default Home;
