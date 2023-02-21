import clsx from "clsx";
import axios from "axios";
import Header from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";
import React, { useState } from "react";
import { wrapper as useStyles } from './styles'
import { CssBaseline, ThemeProvider, createTheme, Box, CircularProgress } from "@material-ui/core";

export default function App() {

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [symbol, setSymbol] = useState('IBM')
  const [darkMode, setDarkMode] = useState(true);
  const [data, setData] = React.useState(undefined);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light"
    }
  });


  React.useEffect(() => {
    const baseURL = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=V41KZM1499BW2QG2`
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, [symbol]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const makeitAnalytics = () => {
    let arr = []
    const A = data['Time Series (5min)']
    const B = Object.keys(A)
    const C = B.slice(0, 8)
    C.forEach((key) => {
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

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <Header handleDrawerToggle={handleDrawerToggle} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Sidebar handleDrawerClose={handleDrawerClose} open={open} />
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}>
          <div className={classes.drawerHeader} />
          {!data && <Box sx={{ width: "100%", height: "50vh", display: 'grid', placeItems: "center" }}>
            <CircularProgress color="white" />
          </Box>}
          {data && <Content meta={data['Meta Data']} data={makeitAnalytics()} setSymbol={setSymbol} symbol={symbol} />}
        </main>
      </div>
    </ThemeProvider>
  );
}
