import React from "react";
import { contextname } from "./MyContext";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Loader from "./Loder";
import {
  Button,
  Card,
  CardHeader,
  CircularProgress,
  FormControl,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import CardBox from "./CardBox";
const Library = (props) => {
  const [inputbook, setInputBook] = React.useState("");
  const contxt = React.useContext(contextname);
    const [txt,setTxt] = React.useState("")
  console.log(contxt.alldata);
  const enteredbook = () => {
    if(inputbook===''){
      alert("Search field is empty");
    }
    else{
      setTxt("Total result : ")
      contxt.setAllDate([]);
      contxt.setSearch(inputbook);
      console.log(contxt.alldata);
    }
    
  };
  React.useEffect(()=>{
    contxt.setSearch("Rama")
      setTxt("Top trendings :")
  },[]);
  return (
    <div style={{backgroundColor:props.bglib,height:"100vh"}}>
      <div className="fullpage" style={{backgroundColor:props.bglib}}>
        <Box sx={{ display: "flex", justifyContent: "Center", width: "100%" }}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "20vw" },
            }}
            noValidate
            autoComplete="off"
            onChange={(e) => setInputBook(e.target.value)}
          >
            
            <TextField
              sx={{ color: "orange",width:"60%" }}
              label="Search"
              variant="standard"
            />
          </Box>
          <Button
            sx={{
              height: "40px",
              margin: "15px 30px",
              backgroundColor: "orange",
              color: "white",
            }}
            onClick={enteredbook}
            variant="contained"
          >
            Search
          </Button>
       
        </Box>
        {contxt.alldata != [] ? (
          <>
          <Box sx={{textAlign:"center",fontSize:"30px",color:props.fnt}}>{txt}  {contxt.alldata.length != 0 ? (contxt.alldata.length):("No found")}</Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              {contxt.isLoading && <><Loader /><br /></>}
              {contxt.alldata.map((i) => {
                return (
                  <CardBox
                  cardbg={props.cbg}
                  fonts={props.fnt}
                    data={i}
                    cover_i={i.cover_i}
                    title={i.title}
                    author_name={i.author_name}
                  />
                );
              })}
            </Box>
          </Box></>
        ) : (
          <h1 style={{ textAlign: "center" }}>Loading.......</h1>
        )}
      </div>
    </div>
  );
};

export default Library;
