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
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import CardBox from "./CardBox";
const Library = () => {
  const [inputbook, setInputBook] = React.useState("");
  const [alldata, search, setSearch, setAllDate, isLoading, setIsLoading] =
    React.useContext(contextname);
    const [txt,setTxt] = React.useState("")
  console.log(alldata);
  const enteredbook = () => {
    setTxt("Total result : ")
    setAllDate([]);
    setSearch(inputbook);
    console.log(alldata);
  };
  React.useEffect(()=>{
   
      setSearch("Rama")
      setTxt("Top trendings :")
    
   
    
  },[]);
  return (
    <div>
      <div className="fullpage">
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
        {alldata != [] ? (
          <>
          <Box sx={{textAlign:"center",fontSize:"30px"}}>{txt}  {alldata.length != 0 ? (alldata.length):("No found")}</Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              {isLoading && <><Loader /><br /></>}
              {alldata.map((i) => {
                return (
                  <CardBox
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
