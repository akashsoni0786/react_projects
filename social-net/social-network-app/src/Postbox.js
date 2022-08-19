import { Avatar, Checkbox, IconButton, InputBase } from "@mui/material";
import React from "react";
import "./Home.css";
import { v4 as uid } from "uuid";
import apicall from "./db.js";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { contextname } from "./Context";
import { Link } from "react-router-dom";
const Postbox = (props) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const contxt = React.useContext(contextname);
  const [commenttxt, setCommenttxt] = React.useState("");
  const [rmvtxt, setRmvtxt] = React.useState("");
  const shareit = async (e) => {
    let a;
    contxt.posts.map((i) => {
      if (i.id == e.target.id) {
        a = {
          id: uid(),
          title: i.title + " of " + i.author,
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
      alert("This post has been shared successfully");
    } catch (e) {
      console.log(e);
    }
  };
  const post_pic_style = {
    textDecoration: "none",
    color:"black"
  };
  const post_pic = {
    width: "100%",
  };
  const already = () => {
    alert("This is your post!");
  };
  let id_like = props.pid + "" + contxt.loginid;
  const addlike = async (e) => {
    if (e.target.checked) {
      let b = {
        id: id_like,
        userid: contxt.loginid,
        postid: props.pid,
        liked: true,
      };
  
      try {
        await apicall.post("/likes", b);
        let l =await apicall.get("/likes");
        contxt.setLikes(l);
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        await apicall.delete(`/likes/${id_like}`);
        let l = await apicall.get("/likes");
        contxt.setLikes(l);
      } catch (e) {
        console.log(e);
      }
    }
  };
  const commentit = async (e) => {

    if(rmvtxt !== ''){
      setRmvtxt('')
    let a = {
      commentid: uid(),
      uid: contxt.loginid,
      usrname: contxt.login,
      postid: props.pid,
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
      alert("Field is empty!")
    }
  };
  return (
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
          <span> shared {props.feeling}</span>
        </div>
        {props.username === contxt.login ? (
          <ShareOutlinedIcon
            onClick={already}
            id={props.pid}
            sx={{ margin: "15px 5px", fontSize: "20px", cursor: "pointer" }}
          />
        ) : (
          <ShareOutlinedIcon
            onClick={shareit}
            id={props.pid}
            sx={{ margin: "15px 5px", fontSize: "20px", cursor: "pointer" }}
          />
        )}
      </div>
      <Link
          className="post_pic"
          style={post_pic_style}
          to="/userpost"
          state={{ details: props.pid }}
        >
          <img style={post_pic} alt="" src={props.pic} />
        </Link>
        <Link
          className="post_pic"
          style={post_pic_style}
          to="/userpost"
          state={{ details: props.pid }}
        >
          <p className="post_txt">{props.text}</p>
        </Link>
      

      <div className="postcontnt">
          <Checkbox
              onChange={addlike}
              {...label}
              icon={<FavoriteBorderIcon />}
              checkedIcon={<FavoriteIcon sx={{ color: "red" }} />}
            /> 
        <InputBase
        id="commentarea"
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
            // id={props.pid}
            onClick={commentit}
            sx={{ margin: "5px 5px", cursor: "pointer" }}
          />
      </div>
    </div>
  );
};

export default Postbox;
