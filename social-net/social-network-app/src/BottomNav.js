import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import Paper from "@mui/material/Paper";
import { IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import DataSaverOnIcon from "@mui/icons-material/DataSaverOn";
import ExtensionIcon from "@mui/icons-material/Extension";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            // label="Recents"
            icon={
              <Tooltip title="HOme page">
                <IconButton
                  size="large"
                  aria-label=" new notifications"
                  color="inherit"
                >
                  <Link className="link" to="/home">
                    <OtherHousesIcon sx={{ color: "purple" }} />
                  </Link>
                </IconButton>
              </Tooltip>
            }
          />

          <BottomNavigationAction
            // label="Favorites"
            icon={
              <Tooltip title="See your posts">
                <IconButton
                  size="large"
                  aria-label="new notifications"
                  color="inherit"
                >
                  <Link className="link" to="/mypost">
                    <ExtensionIcon sx={{ color: "green" }} />
                  </Link>
                </IconButton>
              </Tooltip>
            }
          />

          <BottomNavigationAction
            // label="Archive"
            icon={
                <Tooltip title="Add posts">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="inherit"
              >
                <Link className="link" to="/addpost">
                <DataSaverOnIcon /></Link>
              </IconButton></Tooltip>
            }
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
