import { Avatar, Checkbox, InputBase, Menu, MenuItem, Modal, Typography } from "@mui/material";
import React from "react";
import "./Home.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import apicall from "./db.js";
import { contextname } from "./Context";
import { Box } from "@mui/system";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  
const MyPostbox = (props) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const contxt = React.useContext(contextname);

  const [openmodal, setOpenModal] = React.useState(false);
  const handleOpenmodal = () => {
    setAnchorEl(null);
    setOpenModal(true)};
  const handleClosemodal = () => {
    setAnchorEl(null);
    setOpenModal(false)};


  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
  };
  const deletepost = async (e)=>{
    setAnchorEl(null);
    try {
        await apicall.delete(`/posts/${e.target.id}`);
        let allposts = await apicall.get("/posts");
          contxt.setPosts(allposts.data);
        alert("Deleted successfully");
      } catch (e) {
        console.log(e);
      }
    
  }
  return (
    <>
     <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
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
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{ margin: "15px 5px", fontSize: "20px",cursor:"pointer" }}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            
            <MenuItem onClick={handleOpenmodal} id={props.ids}>Edit</MenuItem>
            <MenuItem onClick={deletepost} id={props.ids}>Delete</MenuItem>
          </Menu>
        </div>
      </div>
      <img className="post_pic" alt="" src={props.pic} />
      <p className="post_txt">{props.text}</p>

      <div className="postcontnt">
        <Checkbox
          {...label}
          icon={<FavoriteBorderIcon />}
          checkedIcon={<FavoriteIcon sx={{ color: "red" }} />}
        />
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Comment...."
          inputProps={{ "aria-label": "Comment...." }}
        />
        <SendOutlinedIcon sx={{ margin: "5px 5px", cursor: "pointer" }} />
      </div>
    </div>
    </>
  );
};

export default MyPostbox;
