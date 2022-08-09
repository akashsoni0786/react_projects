import React from "react";
import "./Home.css";
import "./App.css";
import { styled } from "@mui/material/styles";
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined";
import TextRotationAngleupOutlinedIcon from "@mui/icons-material/TextRotationAngleupOutlined";
import MusicVideoOutlinedIcon from "@mui/icons-material/MusicVideoOutlined";
import Postbox from "./Postbox";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  IconButton,
  InputBase,
  Tooltip,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import PostboxVideo from "./PostIvdeoBox";
const Home = () => {
  const [open, setOpen] = React.useState(0);
  const [image, setImage] = React.useState([]);
  const [video,setPostVideo] = React.useState([]);

  const posttxt = () => {
    setOpen(1);
  };
  const postpic = () => {
    setOpen(2);
  };
  const postvideo = () => {
    setOpen(3);
  };
  
  const inputRef = React.useRef();

  const [source, setSource] = React.useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setPostVideo([...video,url]);
  };

  const handleChoose = (event) => {
    inputRef.current.click();
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage([...image, URL.createObjectURL(img)]);
      // setPostImg([...postimg,image])
      console.log(image);
    }
  };
  return (
    <div className="homepage">
      <div className="postwaybox">
        <Accordion elevation={0}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: "inherit",
              }}
            >
              <Tooltip title="Post your thought">
                <IconButton>
                  <TextRotationAngleupOutlinedIcon
                    onClick={posttxt}
                    sx={{ color: "purple" }}
                  />
                </IconButton>
              </Tooltip>

              <Tooltip title="Post your pic">
                <IconButton>
                  <BrokenImageOutlinedIcon
                    onClick={postpic}
                    sx={{ color: "lightgreen" }}
                  />
                </IconButton>
              </Tooltip>

              <Tooltip title="Post your reel">
                <IconButton>
                  <MusicVideoOutlinedIcon
                    onClick={postvideo}
                    sx={{ color: "orange" }}
                  />
                </IconButton>
              </Tooltip>
            </Box>
          </AccordionSummary>

          <AccordionDetails>
            {open === 1 && (
              <Box>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Write your thought here.."
                  inputProps={{ "aria-label": "Write your thought" }}
                />
                <SendOutlinedIcon
                  sx={{ marginTop: "35px", cursor: "pointer" }}
                />
              </Box>
            )}

            {open === 2 && (
              <div className="App">
                <Button
                  sx={{ backgroundColor: "purple" }}
                  variant="contained"
                  component="label"
                  color="primary"
                >
                  {" "}
                  <AddAPhotoOutlinedIcon
                    sx={{ width: "20px", margin: "0px 15px" }}
                  />{" "}
                  Upload a file
                  {/* <input type="file" hidden /> */}
                  <input
                    type="file"
                    hidden
                    name="myImage"
                    onChange={onImageChange}
                  />
                </Button>
              </div>
            )}

            {open === 3 && (
              <div className="App">
                <Button
                  sx={{ backgroundColor: "purple" }}
                  variant="contained"
                  component="label"
                  color="primary"
                >
                  {" "}
                  <AddAPhotoOutlinedIcon
                    sx={{ width: "20px", margin: "0px 15px" }}
                  />{" "}
                  Upload a file
                  <input
                    ref={inputRef}
                    className="VideoInput_input"
                    type="file"
                    onChange={handleFileChange}
                    accept=".mov,.mp4"
                  />
                </Button>
              </div>
            )}
          </AccordionDetails>
        </Accordion>
      </div>
      {image.length != 0 && image.map((i) => <Postbox postImg={i} />)}
      <PostboxVideo videos={video}/>
    </div>
  );
};

export default Home;
