import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, ThemeProvider, createMuiTheme } from "@material-ui/core";
import Content from "./Content";
import Header from "./Header";
import Sidebar from "./Sidebar";
const drawerWidth = 240;
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
}));

export default function App() {
  const classes = useStyles();
  const [data, setData] = React.useState(undefined);
  const [open, setOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light"
    }
  });

  const symbols = ["IBM", "AMZN", "GOOG", "MSFT", "TSLA", "FB", "JPM", "V", "NVDA", "NFLX"];
  const baseURL = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbols[7]}&interval=5min&apikey=V41KZM1499BW2QG2`

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const makeitAnalytics = () => {
    let arr = []
    const A = data['Time Series (5min)']
    const B = Object.keys(A)
    B.forEach((key) => {
      let perfact = {
        open: parseFloat(A[key]['1. open']),
        high: parseFloat(A[key]['2. high']),
        low: parseFloat(A[key]['3. low']),
        close: parseFloat(A[key]['4. close']),
        volume: parseFloat(A[key]['5. volume']),
      }

      arr.push({
        name: key,
        ...perfact
      })
    })
    return arr
  }

  if (!data) {
    return <div>
      loading....
    </div>
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <Header
          handleDrawerToggle={handleDrawerToggle}
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
        />
        <Sidebar handleDrawerClose={handleDrawerClose} open={open} />
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}>
          <div className={classes.drawerHeader} />
          {data && <Content data={makeitAnalytics()} />}
        </main>
      </div>
    </ThemeProvider>
  );
}
