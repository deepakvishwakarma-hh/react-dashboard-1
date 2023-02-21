import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  header: {
    display: "flex",
    alignItems: "center",
    padding: "0.5rem"
  },
  spacer: {
    flexGrow: 1
  },
  body: {
    padding: "0.5rem",
    flexGrow: 1
  }
});

const widgetNames = {
  a: "Volumes",
  b: "Area Chart",
  c: "Bar Chart",
  d: "Scatter Chart"
};
export default function Widget({ id, component: Item, data }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h6" gutterBottom>
          {widgetNames[id]}
        </Typography>
        <div className={classes.spacer} />
      </div>
      <div className={classes.body}>
        <Item data={data} />
      </div>
    </Card>
  );
}
