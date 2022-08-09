import * as React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Skeleton from "@mui/material/Skeleton";
import { Box } from "@mui/material";

function Media(props) {
  const { loading = false } = props;

  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}
    >
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: 400,
          margin: "50px 20px",
        }}
      >
        <Skeleton
          sx={{ height: 150, width: 100, margin: "20px 10px" }}
          animation="wave"
          variant="rectangular"
        />
        <Box sx={{}}>
          <CardHeader />
          <Skeleton
            animation="wave"
            height={20}
            width="80%"
            style={{ marginBottom: 6 }}
          />
          <Skeleton animation="wave" height={30} width="100px" />
        </Box>
      </Card>

      <Card
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: 400,
          margin: "50px 20px",
        }}
      >
        <Skeleton
          sx={{ height: 150, width: 100, margin: "20px 10px" }}
          animation="wave"
          variant="rectangular"
        />
        <Box sx={{}}>
          <CardHeader />
          <Skeleton
            animation="wave"
            height={20}
            width="80%"
            style={{ marginBottom: 6 }}
          />
          <Skeleton animation="wave" height={30} width="100px" />
        </Box>
      </Card>

      <Card
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: 400,
          margin: "50px 20px",
        }}
      >
        <Skeleton
          sx={{ height: 150, width: 100, margin: "20px 10px" }}
          animation="wave"
          variant="rectangular"
        />
        <Box sx={{}}>
          <CardHeader />
          <Skeleton
            animation="wave"
            height={20}
            width="80%"
            style={{ marginBottom: 6 }}
          />
          <Skeleton animation="wave" height={30} width="100px" />
        </Box>
      </Card>

      <Card
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width:400,
          margin: "50px 20px",
        }}
      >
        <Skeleton
          sx={{ height: 150, width: 100, margin: "20px 10px" }}
          animation="wave"
          variant="rectangular"
        />
        <Box sx={{}}>
          <CardHeader />
          <Skeleton
            animation="wave"
            height={20}
            width="80%"
            style={{ marginBottom: 6 }}
          />
          <Skeleton animation="wave" height={30} width="100px" />
        </Box>
      </Card>

      <Card
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width:400,
          margin: "50px 20px",
        }}
      >
        <Skeleton
          sx={{ height: 150, width: 100, margin: "20px 10px" }}
          animation="wave"
          variant="rectangular"
        />
        <Box sx={{}}>
          <CardHeader />
          <Skeleton
            animation="wave"
            height={20}
            width="80%"
            style={{ marginBottom: 6 }}
          />
          <Skeleton animation="wave" height={30} width="100px" />
        </Box>
      </Card>

      <Card
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width:400,
          margin: "50px 20px",
        }}
      >
        <Skeleton
          sx={{ height: 150, width: 100, margin: "20px 10px" }}
          animation="wave"
          variant="rectangular"
        />
        <Box sx={{}}>
          <CardHeader />
          <Skeleton
            animation="wave"
            height={20}
            width="80%"
            style={{ marginBottom: 6 }}
          />
          <Skeleton animation="wave" height={30} width="100px" />
        </Box>
      </Card>
    </Box>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function Loader() {
  return (
    <div>
      <Media loading />
    </div>
  );
}
