import React, { useState } from "react";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import { withSize } from "react-sizeme";
import TopBar from "./TopBar";
import Widget from "./Widget";
import LineChart from "./LineChart";
import AreaChart from "./AreaChart";
import BarChart from "./BarChart";
import ScatterChart from "./ScatterChart";
const originalItems = ["a", "b", "c", "d"];
import { Box, Typography } from "@material-ui/core";

const initialLayouts = {
  lg: [
    { w: 12, h: 6, x: 0, y: 0, i: "a", moved: false, static: false },
    { w: 6, h: 6, x: 9, y: 0, i: "b", moved: false, static: false },
    { w: 6, h: 6, x: 6, y: 0, i: "c", moved: false, static: false },
    { w: 12, h: 4, x: 0, y: 6, i: "d", moved: false, static: false }
  ]
};

const componentList = {
  a: LineChart,
  b: AreaChart,
  c: BarChart,
  d: ScatterChart
};
function Content({ size: { width }, data, setSymbol, symbol, meta }) {

  const [items, setItems] = useState(originalItems);
  const [layouts, setLayouts] = useState(
    getFromLS("layouts") || initialLayouts
  );
  const onLayoutChange = (_, allLayouts) => {
    setLayouts(allLayouts);
  };
  const onLayoutSave = () => {
    saveToLS("layouts", layouts);
  };
  const onRemoveItem = (itemId) => {
    setItems(items.filter((i) => i !== itemId));
  };
  const onAddItem = (itemId) => {
    setItems([...items, itemId]);
  };

  return (
    <>
      <Box sx={{ m: 2 }}>
        <Typography align="center" variant="h1">{meta["2. Symbol"]}</Typography>
      </Box>
      <TopBar setSymbol={setSymbol} symbol={symbol} />
      <ResponsiveGridLayout
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 5, md: 20, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={60}
        width={width}
        onLayoutChange={onLayoutChange}>
        {items.map((key) => (
          <div
            key={key}
            className="widget"
            data-grid={{ w: 3, h: 2, x: 0, y: Infinity }}>
            <Widget
              id={key}
              data={data}
              onRemoveItem={onRemoveItem}
              component={componentList[key]}
            />
          </div>
        ))}
      </ResponsiveGridLayout>
    </>
  );
}

export default withSize({ refreshMode: "debounce", refreshRate: 60 })(Content);
function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
    } catch (e) { }
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-8",
      JSON.stringify({
        [key]: value
      })
    );
  }
}
