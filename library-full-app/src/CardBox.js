import { Card, CardHeader } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const CardBox = (props) => {
  return (
    <div>
      <Link
        to="/book"
        style={{ textDecoration: "none" }}
        state={{ details: props.data }}
      >
        <Card
          sx={{
            backgroundColor:props.cardbg,
            cursor: "pointer",
            display: "flex",
            width: 400,
            height: "200px",
            margin: "50px 20px",
          }}
        >
          <Card
            sx={{
              margin: "10px 20px",
              height: "160px",
              width: "90px",
              backgroundImage:
                "url(" +
                `https://covers.openlibrary.org/b/id/${props.cover_i}-M.jpg` +
                ")",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></Card>

          <Box sx={{ width: "200px" }}>
            <CardHeader />
            <p style={{ fontSize: "15px", fontWeight: "bold",color:props.fonts }}>
              {props.title}
            </p>
            <p style={{ marginBottom: 6,color:props.fonts }}>Author name: {props.author_name}</p>
          </Box>
        </Card>
      </Link>
    </div>
  );
};

export default CardBox;
