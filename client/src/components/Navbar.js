import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/ButtonGroup";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";

import { Link } from "react-router-dom";
// import logo from "./Image/logo.png"
import { logout } from "../redux/actions/userAction";
import { useSelector, useDispatch } from "react-redux";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const dispatch = useDispatch();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ backgroundColor: "#f2fbff " }}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar style={{ backgroundColor: "#f2fbff " }}>
          <IconButton
            color="#f2fbff"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon style={{ backgroundColor: " #f2fbff) " }} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <nav>
              <Button variant="outlined">
                <Link
                  to="/"
                  style={{ textDecoration: "none", marginLeft: "40px" }}
                >
                  <h5>Home</h5>
                </Link>
              </Button>
              <Button>
                <Link
                  to="/Profile"
                  style={{ textDecoration: "none", marginLeft: "40px" }}
                >
                  <h5> Profile</h5>
                </Link>
              </Button>
              <Button>
                <Link
                  to="/Post"
                  style={{ textDecoration: "none", marginLeft: "40px" }}
                >
                  <h5> Post</h5>
                </Link>
              </Button>

              {!isAuth ? (
                <>
                  <Button variant="outlined">
                    <Link
                      to="/Register"
                      style={{ textDecoration: "none", marginLeft: "750px" }}
                    >
                      <h5>Register</h5>
                    </Link>
                  </Button>
                  <Button variant="outlined">
                    <Link
                      to="/Login"
                      style={{ textDecoration: "none", marginLeft: "40px" }}
                    >
                      <h5>Login</h5>{" "}
                    </Link>
                  </Button>
                </>
              ) : (
                <Button variant="outlined" onClick={() => dispatch(logout())}>
                  <Link
                    to="/logout"
                    style={{ textDecoration: "none", marginLeft: "400px" }}
                  >
                    <h5>Logout</h5>{" "}
                  </Link>
                </Button>
              )}
            </nav>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div>
          <IconButton
            style={{ backgroundColor: "#f2fbff" }}
            onClick={handleDrawerClose}
          >
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <nav>
          <List style={{ backgroundColor: "#f2fbff" }}>
            <ListItem>
              <Button>
                <Link to="/AboutUs" style={{ textDecoration: "none" }}>
                  <h4 style={{ marginLeft: "70px" }}>About Us </h4>
                </Link>
              </Button>
            </ListItem>

            <ListItem>
              <Button>
                <Link to="/Careers" style={{ textDecoration: "none" }}>
                  <h4 style={{ marginLeft: "70px" }}>Career</h4>
                </Link>
              </Button>
            </ListItem>
            <ListItem>
              <Button>
                <Link to="/Medecament" style={{ textDecoration: "none" }}>
                  <h4 style={{ marginLeft: "70px" }}>Drugs</h4>
                </Link>
              </Button>
            </ListItem>
          </List>
        </nav>

        <Divider />
      </Drawer>
      <main
        style={{ backgroundColor: "#f2fbff" }}
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
}
