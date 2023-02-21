import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    width: "100%",
    display: "flex",
    justifyContent: "flex-end"
  }
}));

export default function TopBar({ setSymbol, symbol }) {
  const classes = useStyles();
  const symbols = ["IBM", "AMZN", "GOOG", "MSFT", "TSLA", "FB", "JPM", "V", "NVDA", "NFLX"];
  const handleChange = (event) => {
    setSymbol(event.target.value);
  }

  return (
    <Card className={classes.root}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Symbol</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={symbol}
          label="Age"
          onChange={handleChange}>
          {symbols.map((name, index) => (
            <MenuItem key={index} value={name}>{name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Card>
  );
}
