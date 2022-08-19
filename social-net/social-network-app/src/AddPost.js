import { Button, IconButton, TextField, Tooltip } from "@mui/material";
import React, { useState } from "react";
import './App.css';
import SendIcon from "@mui/icons-material/Send";
import "./Home.css";
import { v4 as uid } from "uuid";
import apicall from "./db.js";
import { contextname } from "./Context";
import ImageIcon from "@mui/icons-material/Image";
import { useNavigate } from "react-router-dom";
const AddPost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = React.useState("");
  const [textcontent, setTextContent] = React.useState("");
  const contxt = React.useContext(contextname);
  const [image, setImage] = React.useState("");
  
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(URL.createObjectURL(img));
      console.log(image);
    }
  };

  const addpost = async () => {
    if (title === "") {
      alert("Title is mendatory");
    } else {
      if (textcontent === "" && image === "") {
        alert("Write text or choose image");
      } 
      
      else {
    
        let a = 
        {
          id: uid(),
          title: title,
          author: contxt.login,
          contentimg: image,
          content: textcontent,
        };
        navigate('/home');
        try
        {
          await apicall.post("/posts", a);
          let allposts = await apicall.get("/posts");
          contxt.setPosts(allposts.data)
        } 
        catch (e) 
        {
          console.log(e);
        }
      }
    }
  };
  return (
    contxt.login && 
    (<div className="adpostmargin">
    <div className="addpostpage">
      <input
        className="posttitle"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="Write post title..."
      />
      <textarea
        className="posttext"
        placeholder="Write here.........."
        onChange={(e) => {
          setTextContent(e.target.value);
        }}
      />
      
        {image !== '' && <div>
          <img style={{height:"100px",width:"100px"}} alt="" src={image}/>
        </div>}
      <div class="tooltip">
      <span class="tooltiptext">Upload image here</span>
        <label htmlFor="file-input">
        <i style={{fontSize:"50px",cursor:"pointer"}} class="fa-regular fa-image"></i>
        </label>
        <input
          id="file-input"
          type="file"
          style={{ display: "none" }}
          onChange={onImageChange}
        />
      </div>
      <Button
        sx={{ margin: "2% 0%", backgroundColor: "#039BE5", float: "left" }}
        onClick={addpost}
        variant="contained"
        endIcon={<SendIcon  />}
      >
        Post
      </Button>
    </div>
  </div>)
    
  );
};

export default AddPost;
