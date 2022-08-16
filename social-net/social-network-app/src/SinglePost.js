import {
  Avatar,
  Button,
  Checkbox,
  Divider,
  IconButton,
  InputBase,
  Modal,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./Home.css";
import { v4 as uid } from "uuid";
import apicall from "./db.js";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { contextname } from "./Context";
import { useLocation } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { Box } from "@mui/system";
const SinglePost = (props) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const contxt = React.useContext(contextname);
  const [post_details, setDetails] = useState([]);
  const [commid, setCommid] = useState("");
  const location = useLocation();
  const [commentedited, setEditedComment] = useState("");
  const [commenttxt, setCommenttxt] = React.useState("");

  const { details } = location.state;
  console.log(details);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  React.useEffect(() => {
    contxt.posts.map((i) => {
      if (i.id == details) {
        setDetails(i);
      }
    });
  }, [details]);

  const shareit = async (e) => {
    let a;
    contxt.posts.map((i) => {
      if (i.id == e.target.id) {
        a = {
          id: uid(),
          title: i.title + " with " + i.author,
          author: contxt.login,
          contentimg: i.contentimg,
          content: i.content,
        };
      }
    });
    try {
      apicall.post("/posts", a);
      let allposts = await apicall.get("/posts");
      contxt.setPosts(allposts.data);
      console.log(allposts.data);
      alert("This post has been shared successfully");
    } catch (e) {
      console.log(e);
    }
  };
  const already = () => {
    alert("This is your post!");
  };
  const editComment = (e) => {
    contxt.comments.map(async (i) => {
      if (i.commentid === e.target.id) {
        let a = {
          commentid: i.commentid,
          uid: i.uid,
          usrname: i.usrname,
          username: i.username,
          postid: i.postid,
          commentarea: commentedited,
        };
        console.log(a);
        try {
          apicall.put(`/comments/${i.id}`, a);
          let allcomments = await apicall.get("/comments");
          contxt.setComments(allcomments.data);
          console.log(allcomments.data);
        } catch (e) {
          console.log(e);
        }
        handleClose();
      }
    });
  };

  const delcomment = async (e) => {
    try {
      await apicall.delete(`/comments/${e.target.id}`);
      let allposts = await apicall.get("/comments");
      contxt.setComments(allposts.data);
      alert("Deleted successfully");
    } catch (e) {
      console.log(e);
    }
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const openforedit = (e) => {
    handleOpen();
    setCommid(e.target.id);
  };
  const commentit = async (e) => {
    let a = {
      commentid: uid(),
      uid: contxt.loginid,
      usrname: contxt.login,
      postid: e.target.id,
      username: contxt.login,
      commentarea: commenttxt,
    };
    try {
      apicall.post("/comments", a);
      let allcomm = await apicall.get("/comments");
      console.log(allcomm.data);
    } catch (e) {
      alert(e);
    }
  };
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
              Edit comment
            </Typography>
            <Divider />
            <Box sx={{ height: "50px" }}></Box>
            <div className="postcontnt">
              <InputBase
                onChange={(e) => {
                  setEditedComment(e.target.value);
                }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Comment...."
                inputProps={{ "aria-label": "Comment...." }}
              />
              <i
                onClick={editComment}
                class="fa fa-paper-plane"
                aria-hidden="true"
                id={commid}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
          </Box>
        </Modal>
      </div>
      <div className="homepage">
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
              <p className="post_username">{post_details.author}</p>
              <span> shared {post_details.title}</span>
            </div>
            {post_details.username === contxt.login ? (
              <ShareOutlinedIcon
                onClick={already}
                id={post_details.id}
                sx={{ margin: "15px 5px", fontSize: "20px", cursor: "pointer" }}
              />
            ) : (
              <ShareOutlinedIcon
                onClick={shareit}
                id={post_details.pid}
                sx={{ margin: "15px 5px", fontSize: "20px", cursor: "pointer" }}
              />
            )}
          </div>
          <img className="post_pic" alt="" src={post_details.contentimg} />
          <p className="post_txt">{post_details.content}</p>
        </div>
      </div>
      <div className="homepagedown">
        <div className="postbox">
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
              onChange={(e) => {
                setCommenttxt(e.target.value);
              }}
            />
            <SendOutlinedIcon
              id={props.ids}
              onClick={commentit}
              sx={{ margin: "5px 5px", cursor: "pointer" }}
            />
          </div>
        </div>

        {contxt.comments.map((i) => {
          console.log("####: " + i.postid + "===" + post_details.id);

          if (post_details.id == i.postid) {
            return (
              <div className="postbox">
                <div className="postcontnt">
                  <p>
                    <b>{i.usrname}: </b> <span>{i.commentarea}</span>
                  </p>
                  {i.usrname == contxt.login && (
                    <p>
                      <i
                        style={{ cursor: "pointer" }}
                        onClick={openforedit}
                        class="fa fa-edit"
                        id={i.commentid}
                        aria-hidden="true"
                      ></i>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <i
                        style={{ cursor: "pointer" }}
                        onClick={delcomment}
                        class="fa fa-trash"
                        id={i.id}
                        aria-hidden="true"
                      ></i>
                    </p>
                  )}
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default SinglePost;
