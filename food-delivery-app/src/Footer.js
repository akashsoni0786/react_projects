import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import {
  Button,
  Divider,
  Drawer,
  IconButton,
  ListItemButton,
  ListItemIcon,
  Tooltip,
  Typography,
} from "@mui/material";
// import * as React from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import Paper from '@mui/material/Paper';
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
export default function FixedBottomNavigation(props) {
  const [state, setState] = React.useState(false);
  const [total, setTotal] = React.useState(0);

  const sum = props.cartarray.reduce((twopara, twopara2) => {
    return twopara + Number(twopara2.price) * Number(twopara2.quan);
  }, 0);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <div>
        {["left", "right", "top", "bottom"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {props.cartarray.length == 0 ? (
                <h1>Your cart is empty</h1>
              ) : (
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Category</TableCell>
                        <TableCell align="right">Price&nbsp;(₹)</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Total&nbsp;Price </TableCell>
                        <TableCell align="right">Remove</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {props.cartarray.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.name}</TableCell>
                          <TableCell align="right">{row.price}</TableCell>
                          <TableCell align="right">{row.quan}</TableCell>
                          <TableCell align="right">
                            {Number(row.quan) * Number(row.price)}
                          </TableCell>
                          <p hidden={true}>
                            {() => {
                              let t = Number(row.quan) * Number(row.price);
                              setTotal(total + t);
                            }}
                          </p>
                          <TableCell align="right">
                            <IconButton aria-label="delete" size="small">
                              <img
                                id={row.id}
                                onClick={props.deleteFood}
                                alt=""
                                src="download.png"
                                style={{ width: "20px" }}
                              />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
      <Box sx={{ pb: 7 }}>
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <BottomNavigationAction
              label="Recents"
              icon={
                <IconButton
                  onClick={toggleDrawer("bottom", true)}
                  aria-label="delete"
                  size="small"
                >
                  <KeyboardDoubleArrowUpIcon fontSize="50px" />
                </IconButton>
              }
            />

            <BottomNavigationAction
              label="Recents"
              icon={
                <Typography sx={{ fontSize: "20px" }}>
                  Orders({props.cartarray.length})
                </Typography>
              }
            />
            <BottomNavigationAction
              label="Favorites"
              icon={
                <Typography sx={{ fontSize: "20px" }}>
                  Total : ₹{sum}
                </Typography>
              }
            />
            <BottomNavigationAction
              label="Archive"
              icon={
                <Tooltip title="Empty cart">
                  <IconButton>
                    <img
                      onClick={props.emptyit}
                      alt=""
                      src="https://cdn-icons-png.flaticon.com/512/1437/1437185.png"
                      style={{ width: "30px" }}
                    />
                  </IconButton>
                </Tooltip>
              }
            />

            <BottomNavigationAction
              label="Archive"
              icon={
                <Tooltip title="Order this ?">
                  <IconButton>
                    <img
                       onClick={props.placedorder}
                      alt=""
                      src="https://cdn-icons.flaticon.com/png/512/3246/premium/3246728.png?token=exp=1659098612~hmac=33b793e89ee20dd74dd27fcd27f7df57"
                      style={{ width: "30px" }}
                    />
                  </IconButton>
                </Tooltip>
                
              }
            />
          </BottomNavigation>
        </Paper>
      </Box>
    </>
  );
}

const messageExamples = [
  {
    primary: "Brunch this week?",
    secondary:
      "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: "/static/images/avatar/5.jpg",
  },
  {
    primary: "Birthday Gift",
    secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
    person: "/static/images/avatar/1.jpg",
  },
  {
    primary: "Recipe to try",
    secondary:
      "I am try out this new BBQ recipe, I think this might be amazing",
    person: "/static/images/avatar/2.jpg",
  },
  {
    primary: "Yes!",
    secondary: "I have the tickets to the ReactConf for this year.",
    person: "/static/images/avatar/3.jpg",
  },
  {
    primary: "Doctor's Appointment",
    secondary:
      "My appointment for the doctor was rescheduled for next Saturday.",
    person: "/static/images/avatar/4.jpg",
  },
  {
    primary: "Discussion",
    secondary: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
    person: "/static/images/avatar/5.jpg",
  },
  {
    primary: "Summer BBQ",
    secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
    person: "/static/images/avatar/1.jpg",
  },
];
