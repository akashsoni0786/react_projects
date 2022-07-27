// import * as React from "react";
// import PropTypes from "prop-types";
// import { Global } from "@emotion/react";
// import { styled } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import { grey } from "@mui/material/colors";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import Skeleton from "@mui/material/Skeleton";
// import Typography from "@mui/material/Typography";
// import SwipeableDrawer from "@mui/material/SwipeableDrawer";
// import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
// import { Icon } from "@mui/material";
// const drawerBleeding = 56;

// const Root = styled("div")(({ theme }) => ({
//   height: "100%",
//   backgroundColor:
//     theme.palette.mode === "light"
//       ? grey[100]
//       : theme.palette.background.default,
// }));

// const StyledBox = styled(Box)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
// }));

// function SwipeableEdgeDrawer(props) {

//   const { window } = props;
//   const [open, setOpen] = React.useState(false);

//   const toggleDrawer = (newOpen) => () => {
//     setOpen(newOpen);
//   };

//   // This is used only for the example
//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Root>
//         <Box sx={{ textAlign: "center",position:"absolute" ,top:'0vh'}}>
//           <Button onClick={toggleDrawer(true)}>Open</Button>
//         </Box>
//       <CssBaseline />
//       <Global
//         styles={{
//           ".MuiDrawer-root > .MuiPaper-root": {
//             height: `calc(50% - ${drawerBleeding}px)`,
//             overflow: "visible",
//           },
//         }}
//       />

//         <SwipeableDrawer
//           sx={{ backgroundColor: "transparent" }}
//           container={container}
//           anchor="bottom"
//           open={open}
//           onClose={toggleDrawer(false)}
//           onOpen={toggleDrawer(true)}
//           swipeAreaWidth={drawerBleeding}
//           disableSwipeToOpen={false}
//           ModalProps={{
//             keepMounted: true,
//           }}
//         >
//           <StyledBox
//             sx={{
//               position: "absolute",
//               top: -drawerBleeding,
//               borderTopLeftRadius: 8,
//               borderTopRightRadius: 8,
//               visibility: "visible",
//               right: 0,
//               left: 0,
//             }}
//           >
//             <div style={{display:"flex",justifyContent:"space-around",marginBottom:"1000px",zIndex:"1"}}>
//             <Typography sx={{ p: 2, color: "text.secondary" }}>
//               Total:$600
//             </Typography>
//             <Typography sx={{ p: 2, color: "text.secondary" }}>
//               Total:$600
//             </Typography>
//             <Button onClick={()=>{alert()}}
//             sx={{backgroundColor:"#ba000d",cursor:"pointer"}}
//                 variant="contained">Continue</Button>
//             </div>

//           </StyledBox>
//           <StyledBox
//             sx={{
//               px: 2,
//               pb: 2,
//               height: "100%",
//               overflow: "auto",
//             }}
//           >
//             <Skeleton variant="rectangular" height="100%" />
//           </StyledBox>
//         </SwipeableDrawer>

//     </Root>
//   );
// }

// SwipeableEdgeDrawer.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default SwipeableEdgeDrawer;

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
import { Button, Divider, Drawer, IconButton, ListItemButton, ListItemIcon, Typography } from "@mui/material";

import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
export default function FixedBottomNavigation() {
    const [state, setState] = React.useState(false);
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setState({ ...state, [anchor]: open });
      };


  return (
    <>
<div>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            bottom
          </Drawer>
        </React.Fragment>
      ))}
    </div>
    <Box sx={{ pb: 7 }}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation style={{display:'flex',justifyContent:"space-around"}}>
          <BottomNavigationAction
            label="Recents"
            icon={
              <IconButton onClick={toggleDrawer("bottom", true)} aria-label="delete" size="small">
                <KeyboardDoubleArrowUpIcon fontSize="50px" />
              </IconButton>
            }
          />

          <BottomNavigationAction
            label="Recents"
            icon={<Typography>Your Orders(2)</Typography>}
          />
          <BottomNavigationAction
            label="Favorites"
            icon={<Typography>Total : $500</Typography>}
          />
          <BottomNavigationAction
            label="Archive"
            icon={
              <Button variant="contained" sx={{ backgroundColor: "#b71c1c" }}>
                Continue
              </Button>
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
