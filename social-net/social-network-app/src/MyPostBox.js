import {
  Avatar,
  Button,
  Checkbox,
  InputBase,
  Menu,
  MenuItem,
  Modal,
  Typography,
} from "@mui/material";
import React from "react";
import "./Home.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import apicall from "./db.js";
import { contextname } from "./Context";
import { Box } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";
import { v4 as uid } from "uuid";
import { Link, NavLink } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const MyPostbox = (props) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const contxt = React.useContext(contextname);
  const [catchid, setCatchid] = React.useState("");
  const [rmvtxt, setRmvtxt] = React.useState("");
  const [openmodal, setOpenModal] = React.useState(false);
  const [image, setImage] = React.useState("");
  const [commenttxt, setCommenttxt] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [textcontent, setTextContent] = React.useState("");
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(URL.createObjectURL(img));
    }
  };
  const updatepost = async () => {
    if (title === "") {
      alert("Title is mendatory");
    } else {
      if (textcontent === "" && image === "") {
        alert("Field is empty");
      } else {
     
        let a = {
          title: title,
          author: contxt.login,
          contentimg: image,
          content: textcontent,
        };

   
        try {
          await apicall.put(`/posts/${catchid}`, a);
          let allposts = await apicall.get("/posts");
          contxt.setPosts(allposts.data);
      
        } catch (e) {
          console.log(e);
        }
      }
    }
  };
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const openedit = () => {
    setAnchorEl(null);
    handleOpenModal();
  };
  const open = Boolean(anchorEl);
  const handleClick = async (event) => {
    setCatchid(event.target.id);
    setAnchorEl(event.currentTarget);
    let thisposts = await apicall.get(`/posts/${event.target.id}`);

    setTitle(thisposts.data.title);
    setTextContent(thisposts.data.content);
    setImage(thisposts.data.contentimg);
  };
  const handleCloses = (e) => {
    setAnchorEl(null);
  };
  const deletepost = async (e) => {
    setAnchorEl(null);
    try {
      await apicall.delete(`/posts/${e.target.id}`);
      let allposts = await apicall.get("/posts");
      contxt.setPosts(allposts.data);
      alert("Deleted successfully");
    } catch (e) {
      console.log(e);
    }
  };
  const commentit = async (e) => {
    if(rmvtxt !== ''){
    setRmvtxt('')
    let a = {
      commentid: uid(),
      uid: contxt.loginid,
      usrname: contxt.login,
      postid: props.ids,
      username: contxt.login,
      commentarea: commenttxt,
    };
    try {
      await apicall.post("/comments", a);
      let allcomm = await apicall.get("/comments");
      await contxt.setComments(allcomm.data);
    } catch (e) {
      alert(e);
    }
  }
  else{
    alert("Field is empty");
  }
  };
  const post_pic_style = {
    textDecoration: "none",
    color:"black"
  };
  const post_pic = {
    width: "100%",
  };
  return (
    <>
      <div>
        <Modal
          open={openmodal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Edit yor post
            </Typography>
            <input
              autoFocus
              className="posttitle"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
              placeholder="Write post title..."
            />
            <textarea
              className="posttext"
              placeholder="Write here........."
              onChange={(e) => {
                setTextContent(e.target.value);
              }}
              value={textcontent}
            />
            <div>
              <label htmlFor="file-input">
                <i class="fa-solid fa-circle-arrow-up"></i>
              </label>
              <input
                id="file-input"
                type="file"
                style={{ display: "none" }}
                onChange={onImageChange}
              />
            </div>
            <Button
              sx={{ margin: "2% 0%", backgroundColor: "purple", float: "left" }}
              onClick={updatepost}
              variant="contained"
              endIcon={<SendIcon />}
            >
              Update
            </Button>
          </Box>
        </Modal>
      </div>
      <div className="postbox">
        <div className="upperarea">
          <div className="user_pic_post">
            <Avatar>
              <img
                style={{ width: "40px" }}
                alt=""
                src="https://i.pinimg.com/736x/82/66/af/8266afd59e5dbcd0f732de33b3235c71.jpg"
              />
            </Avatar>
            <p className="post_username">{props.username}</p>
          </div>

          <div>
            <MoreVertIcon
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              id={props.ids}
              sx={{ margin: "15px 5px", fontSize: "20px", cursor: "pointer" }}
            />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleCloses}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={openedit} id={props.ids}>
                Edit
              </MenuItem>
              <MenuItem onClick={deletepost} id={props.ids}>
                Delete
              </MenuItem>
            </Menu>
          </div>
        </div>

        <Link
          className="post_pic"
          style={post_pic_style}
          to="/userpost"
          state={{ details: props.ids }}
        >
          <img style={post_pic} alt="" src={props.pic} />
        </Link>
        <Link
          className="post_pic"
          style={post_pic_style}
          to="/userpost"
          state={{ details: props.ids }}
        >
          <p className="post_txt">{props.text}</p>
        </Link>

        <div className="postcontnt">
          <Checkbox
            {...label}
            icon={<FavoriteBorderIcon />}
            checkedIcon={<FavoriteIcon sx={{ color: "red" }} />}
          />
          <InputBase
          id={props.ids}
            sx={{ ml: 1, flex: 1 }}
            placeholder="Comment...."
            inputProps={{ "aria-label": "Comment...." }}
            onChange={(e) => {
              setCommenttxt(e.target.value);
              setRmvtxt(e.target.value)
            }}
            value={rmvtxt}
          />
          <SendOutlinedIcon
            id={props.ids}
            onClick={commentit}
            sx={{ margin: "5px 5px", cursor: "pointer" }}
          />
        </div>
      </div>
    </>
  );
};

export default MyPostbox;
