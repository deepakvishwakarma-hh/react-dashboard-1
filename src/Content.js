import React from "react";
import TopBar from "./TopBar";
import Widget from "./Widget";
import LineChart from "./LineChart";
import AreaChart from "./AreaChart";
import BarChart from "./BarChart";
import ScatterChart from "./ScatterChart";
const originalItems = ["a", "b", "c", "d"];
import { Box, Typography } from "@material-ui/core";

const componentList = {
  a: LineChart,
  b: AreaChart,
  c: BarChart,
  d: ScatterChart
};

export default function Content({ data, setSymbol, symbol, meta }) {
  const gridContainer2 = {
    display: "grid",
    gridAutoColumns: "100%",
    gridAutoFlow: "row"
  };

  const gridItem = {
    height: '500px',
    margin: "5px",
  };

  return (
    <>
      <Box sx={{ m: 2 }}>
        <Typography align="center" variant="h1">{meta["2. Symbol"]}</Typography>
      </Box>

      <TopBar setSymbol={setSymbol} symbol={symbol} />

      <Box sx={gridContainer2}>
        {originalItems.map((key) => (
          <Box sx={gridItem} item lg="12"
            key={key}>
            <Widget
              id={key}
              data={data}
              component={componentList[key]}
            />
          </Box >
        ))}
      </Box>
    </>
  );
}
