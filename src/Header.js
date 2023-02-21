import React from "react";
import Badge from "@material-ui/core/Badge";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    [theme.breakpoints.up("sm")]: {
      zIndex: theme.zIndex.drawer + 1
    }
  },
  rightIcons: {
    marginLeft: theme.spacing(0.5)
  },
  spacer: {
    flexGrow: 1
  }
}));

export default function Header({
  handleDrawerToggle,
  toggleDarkMode,
  darkMode
}) {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appbar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Dashboard
        </Typography>
        <div className={classes.spacer} />
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDarkMode}
          edge="start"
          className={classes.rightIcons}
        >
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          className={classes.rightIcons}
        >
          <Badge badgeContent={0} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          className={classes.rightIcons}
        >
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
