import { Button, IconButton, TextField, Tooltip } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import "./Home.css";
import { v4 as uid } from "uuid";
import apicall from "./db.js";
import { contextname } from "./Context";
import ImageIcon from "@mui/icons-material/Image";
const AddPost = () => {
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
      if (textcontent !== "") {
        alert("Text field is empty");
      } else {
        console.log(image);
        let a = {
          id: uid(),
          title: title,
          author: contxt.login,
          contentimg: image,
          content: textcontent,
        };

        console.log(a);
        try {
          apicall.post("/posts", a);
          let allposts = await apicall.get("/posts");
          contxt.setPosts(allposts.data);
        } catch (e) {
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
        onClick={addpost}
        variant="contained"
        endIcon={<SendIcon />}
      >
        Post
      </Button>
    </div>
  </div>)
    
  );
};

export default AddPost;
